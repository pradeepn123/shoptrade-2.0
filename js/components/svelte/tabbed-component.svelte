<script>
    import { onMount } from "svelte";
    let tabs = [];
    let products = [];
    let selectedTab;
    let renderedProducts = [];
    let hasAllProductLoaded = false;

    $: hasAllProductLoaded, updateSelectedTab();
    $: selectedTab, getFilteredProduct();

    const updateSelectedTab = () => {
        if(hasAllProductLoaded) {
          selectedTab = tabs[0]
        }
    
    }
    const handleTabSelect = (tab) => {
        selectedTab = tab;
    };

    const getFilteredProduct = () => {
        if (selectedTab == "All Work") {
            renderedProducts = products;
        } else {
            renderedProducts = products.filter((item) => {
                if((item.tag).includes(selectedTab)) {
                    return item;
                }
            });
        }
    };

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const {
            paginate,
            data: { products: responseProducts, tabs: responseTabs },
        } = data;
        return {
            paginate,
            responseProducts,
            responseTabs,
        };
    };

    const setProducts = (newProducts) => {
        products = [...products, ...newProducts];
    };

    const setTabs = (tabData) => {
        tabs = [...tabData];
    };

    const getAndSetDataFromApi = async () => {
        const url = "/pages/work?view=work-json";
        const { paginate, responseProducts, responseTabs } = await getData(url);
        setTabs(responseTabs);
        setProducts(responseProducts);
        const paginateData = paginate.filter((item) => item);
        (async () => {
        let count = 0;
        for (const url of paginateData) {
                const { responseProducts } = await getData(url);
                setProducts(responseProducts);
                count++;
                if(count == paginateData.length) {
                    hasAllProductLoaded = true;
                }
            }
        })();
    };

    onMount(async () => {
        await getAndSetDataFromApi();
    });
</script>

<div>
  {#if !hasAllProductLoaded }
  <div class="backdrop">
    <div class="loader">
      <span></span>
    </div>
  </div>
  {:else}
  <div>
    <div class="filter_cards container">
      <div class="filters_card_child">
          {#each tabs as tab}
              <a
                  class="filters_switch { tab == selectedTab ? "activeWork" : ''}"
                  id={tab}
                  data-tabname={tab}
                  on:click={() => {
                      handleTabSelect(tab);
                  }}
              >
                  {tab.replace("_", " ").replace("("," ").replace(")"," ")}
              </a>
          {/each}
      </div>
  </div>
  <div class="workpage__cards_parent">
      <div class="container">
        <ul class="ourWork__cards workpage__cards ">
          {#each renderedProducts as block }
          <a
              href="{block.link}"
              class="ourWork__card workpage__card {block.tag} { block.link == false ? 'unclickble' : '' }"
              target = { block.open_in_new_tab == "true" ? "__blank" : ''}
              >
              <div class="ourWork__cardBody">
                <div class="img-container">
                  <div id="work-img-wrp" class="img-wrp">
                    <img class="thumb-img" src="{block.image}">
                    <div class="workOn-hover--info">
                      {@html (block.work_information).replaceAll( ' ', '  &bull; ')}
                      <h6 class="work_info_author">
                        {block.brand_info}
                      </h6>
                    </div>
                    {#if block.show_button}
                      <div class="btn-wrp">
                        {#if block.make_it_as_coming_soon}
                          <a
                            href="{ block.link}"
                            target="_blank"
                            class="btn btn--arrow"
                          >
                            <div>
                              <img
                                class="btn-arrrow-work"
                                src="https://cdn.shopify.com/s/files/1/0662/5122/7356/files/WHITE-ARROW.png?v=1666071684"
                                alt="arrow"
                              >
                            </div>
                          </a>
                        {:else }
                          <a class="btn btn--arrow unclickble">
                            <div>
                              <img
                                class="btn-arrrow-work"
                                src="https://cdn.shopify.com/s/files/1/0662/5122/7356/files/loading-icon.svg?v=1668582566"
                                alt="arrow"
                              >
                            </div>
                          </a>
                        {/if}
                      </div>
                    {/if}
                  </div>
                  {#if block.make_it_as_coming_soon == "true" }
                    <div class="coming-soon-parent">
                      <div class="coming-soon-peoject">Coming Soon</div>
                    </div>
                  {/if}
                  <div class="work-logo-footer ">
                    {#if block.show_logo_insted_of_text == "true" } 
                      <div class="work-logo-footer__imgWrp">
                        <img class=" brandLogo" src=" { block.brand_logo}  ">
                        {#if block.link }
                          <span class="work_hover_arrow">
                            <img src="https://cdn.shopify.com/s/files/1/0662/5122/7356/files/Mediamodifier-Design.svg?v=1709880488" alt="">
                          </span>
                        {/if}
                      </div>
                    {:else}
                      <p
                        class="work--page-brand-name" >
           
                        { block.brand_name  }
                        {#if block.link }
                          <span class="work_hover_arrow">
                            <img src="https://cdn.shopify.com/s/files/1/0662/5122/7356/files/Mediamodifier-Design.svg?v=1709880488" alt="">
                          </span>
                        {/if}
                      </p>
                    {/if}
                  </div>
                </div>
              </div>
            </a>
          {/each} 
          </ul>
        </div>
  </div>
  </div>
  {/if}
</div>

<style>
  .backdrop {
    display: block !important
  }
  .loader {
    display: block !important;
  }
</style>

    
