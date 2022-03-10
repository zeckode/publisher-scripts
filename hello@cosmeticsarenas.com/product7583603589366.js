(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'sparkroom.myshopify.com',
        storefrontAccessToken: 'a25ad48cb5c883dc7fc3ab0611410612',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '7583603589366',
          node: document.getElementById('product-component-84e48069-9421-42da-bfa6-c4ab8cc95c0d'),
          moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          },
          "carousel-button": {
            "display": "none"
          }
        },
        "button": {
          "font-family": "Montserrat, sans-serif",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
            "background-color": "#c41751"
          },
          "background-color": "#da1a5a",
          ":focus": {
            "background-color": "#c41751"
          },
          "border-radius": "40px"
        },
        "quantityInput": {
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "options": false
      },
      "text": {
        "button": "View Product"
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-family": "Montserrat, sans-serif",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
            "background-color": "#c41751"
          },
          "background-color": "#da1a5a",
          ":focus": {
            "background-color": "#c41751"
          },
          "border-radius": "40px"
        },
        "quantityInput": {
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px"
        }
      },
      "googleFonts": [
        "Montserrat"
      ],
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-family": "Montserrat, sans-serif",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
            "background-color": "#c41751"
          },
          "background-color": "#da1a5a",
          ":focus": {
            "background-color": "#c41751"
          },
          "border-radius": "40px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-family": "Montserrat, sans-serif",
          "background-color": "#da1a5a",
          ":hover": {
            "background-color": "#c41751"
          },
          ":focus": {
            "background-color": "#c41751"
          }
        },
        "count": {
          "font-size": "16px"
        }
      },
      "googleFonts": [
        "Montserrat"
      ]
    }
  },
        });
      });
    }
  })();
  
