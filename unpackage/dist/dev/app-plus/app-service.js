(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  Object.freeze({});
  Object.freeze([]);
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var _export_sfc = (sfc, props) => {
    for (const [key, val] of props) {
      sfc[key] = val;
    }
    return sfc;
  };
  const _sfc_main$7 = {
    data() {
      return {
        href: "https://uniapp.dcloud.io/component/README?id=uniui",
        shoesLeft: [{
          src: "https://img-blog.csdnimg.cn/f0c8d213c40a40609d10a4d9d09c1afc.png",
          season: "spring",
          title: "LiNing \u674E\u5B81",
          desc: "\u51CF\u9707\u56DE\u5F39\u7BEE\u7403\u978B",
          price: "799.00"
        }, {
          src: "https://img-blog.csdnimg.cn/0cfdd0d0344f47ef8ae9eae339a5c567.png",
          season: "spring",
          title: "Puma \u5F6A\u9A6C",
          desc: "\u539A\u5E95\u4F11\u95F2\u978B",
          price: "399.00"
        }, {
          src: "https://img-blog.csdnimg.cn/e6bd4f88865a498b913e4684ae38ab6b.png",
          season: "spring",
          title: "LiNing \u674E\u5B81",
          desc: "\u97E6\u5FB7\u4E4B\u9053 \u5E7B\u5F713",
          price: "499.00"
        }, {
          src: "https://img-blog.csdnimg.cn/e5863c7ab4224be0b198be48c8f22c90.png",
          season: "summer",
          title: "Anta \u5B89\u8E0F",
          desc: "KT6 \u6C34\u82B1\u4E09\u4EE3 \u6C34\u5F69",
          price: "400.00"
        }, {
          src: "https://img-blog.csdnimg.cn/9b849bd3687242f3bfe15d00a04865bf.png",
          season: "spring",
          title: "LiNing \u674E\u5B81",
          desc: "\u7EDD\u5F71CRC \u8DD1\u978B",
          price: "889.00"
        }],
        shoesRight: [{
          src: "https://img-blog.csdnimg.cn/2564ea9964ce447199141fea53aa3ade.png",
          season: "summer",
          title: "LiNing \u674E\u5B81",
          desc: "\u51CF\u9707\u56DE\u5F39\u7BEE\u7403\u978B",
          price: "799.00"
        }, {
          src: "https://img-blog.csdnimg.cn/dca5fec4bac148788222c9e91db11290.png",
          season: "spring",
          title: "HuiLi \u56DE\u529B",
          desc: "\u4F11\u95F2\u56DE\u5929\u4E4B\u529B\u677F\u978B",
          price: "318.00"
        }, {
          src: "https://img-blog.csdnimg.cn/64e0c0b7106c4e4391a831d146a5edfd.png",
          season: "summer",
          title: "LiNing \u674E\u5B81",
          desc: "\u8212\u9002\u4F11\u95F2\u978B",
          price: "299.00"
        }, {
          src: "https://img-blog.csdnimg.cn/18a1f9bce88d47a7a4e5d30e353d1bfd.png",
          season: "summer",
          title: "Converse \u5321\u5A01",
          desc: "\u767E\u642D\u4F11\u95F2\u677F\u978B",
          price: "499.00"
        }, {
          src: "https://img-blog.csdnimg.cn/141910b5005643f493fbe44428594f1b.png",
          season: "summer",
          title: "LiNing \u674E\u5B81",
          desc: "\u60DF\u543ESuperwave",
          price: "499.00"
        }, {
          src: "https://img-blog.csdnimg.cn/b11406ccf77a46798428987587de4d2e.png",
          season: "spring",
          title: "Puma \u5F6A\u9A6C",
          desc: "Puma Ralph Sampson",
          price: "399.00"
        }]
      };
    },
    methods: {
      getPhoto() {
        uni.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
          success: function(res) {
            formatAppLog("log", "at pages/index/index.vue:182", JSON.stringify(res.tempFilePaths));
          }
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { id: "bgPos" }, [
        vue.createElementVNode("view", { id: "bgRound" })
      ]),
      vue.createElementVNode("view", { class: "g-header" }, [
        vue.createElementVNode("view", { class: "schBox" }, [
          vue.createElementVNode("image", {
            src: "/static/images/home/camera.png",
            style: { "width": "17px", "height": "17px" },
            onClick: _cache[0] || (_cache[0] = (...args) => $options.getPhoto && $options.getPhoto(...args))
          }),
          vue.createElementVNode("input", {
            type: "text",
            class: "text-in",
            bindinput: "schInput"
          }),
          vue.createElementVNode("view", { class: "sch-btn" }, [
            vue.createElementVNode("text", null, "\u641C\u7D22")
          ])
        ]),
        vue.createElementVNode("image", {
          src: "/static/images/home/ring.png",
          style: { "width": "60rpx", "height": "60rpx" }
        })
      ]),
      vue.createElementVNode("view", { class: "brand-info" }, [
        vue.createCommentVNode(' <view class="brand-info-header">\r\n		        <text>\u54C1\u724C\u63A8\u8350</text>\r\n		      </view> '),
        vue.createElementVNode("image", {
          src: "https://img-blog.csdnimg.cn/ea6f15475030447e8395d16d2ee429da.png",
          class: "brand-info-body",
          mode: "aspectFill"
        }),
        vue.createElementVNode("view", { class: "brand-point" }, [
          vue.createElementVNode("view", { class: "brand-point-desc" }),
          vue.createElementVNode("view", {
            class: "brand-point-desc",
            style: { "background-color": "#4797EB" }
          }),
          vue.createElementVNode("view", { class: "brand-point-desc" })
        ])
      ]),
      vue.createElementVNode("view", { class: "g-main" }, [
        vue.createElementVNode("view", { class: "m-body fn-mgTop" }, [
          vue.createElementVNode("h4", { style: { "color": "#707070" } }, "\u4E2A\u6027\u5316\u63A8\u8350"),
          vue.createElementVNode("view", {
            class: "shoes-info",
            style: { "margin-top": "20rpx" }
          }, [
            vue.createElementVNode("view", { class: "shoes-info-left" }, [
              vue.createElementVNode("view", {
                class: "shoes-box-big",
                style: { "margin-bottom": "20px" }
              }, [
                vue.createElementVNode("image", {
                  src: "https://img-blog.csdnimg.cn/26d0dc4712864329b58537933f829b3b.png",
                  mode: "widthFix",
                  class: "shoes-img"
                }),
                vue.createElementVNode("view", { class: "shoes-body" }, [
                  vue.createElementVNode("view", { class: "shoes-title" }, [
                    vue.createElementVNode("text", { class: "shoes-title-mark-spring" }, "2021\u5E74\u6625\u5B63"),
                    vue.createElementVNode("text", { class: "shoes-title-name" }, "CONVERE \u5321\u5A01")
                  ]),
                  vue.createElementVNode("view", { class: "shoes-desc" }, "Chuck 70 \u590F\u5A01\u5937\u84DD"),
                  vue.createElementVNode("view", { class: "shoes-price" }, [
                    vue.createTextVNode("\uFFE5"),
                    vue.createElementVNode("text", null, "599.00")
                  ])
                ])
              ]),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.shoesLeft, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "shoes-box-normal",
                  style: { "margin-bottom": "20px" }
                }, [
                  vue.createElementVNode("image", {
                    src: item.src,
                    mode: "widthFix",
                    class: "shoes-img"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "shoes-body" }, [
                    vue.createElementVNode("view", { class: "shoes-title" }, [
                      item.season == "summer" ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "shoes-title-mark-summer"
                      }, "2021\u5E74\u590F\u5B63")) : item.season == "spring" ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 1,
                        class: "shoes-title-mark-spring"
                      }, "2021\u5E74\u6625\u5B63")) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("text", { class: "shoes-title-name" }, vue.toDisplayString(item.title), 1)
                    ]),
                    vue.createElementVNode("view", { class: "shoes-desc" }, vue.toDisplayString(item.desc), 1),
                    vue.createElementVNode("view", { class: "shoes-price" }, [
                      vue.createTextVNode("\uFFE5"),
                      vue.createElementVNode("text", null, vue.toDisplayString(item.price), 1)
                    ])
                  ])
                ]);
              }), 256))
            ]),
            vue.createElementVNode("view", { class: "shoes-info-right" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.shoesRight, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "shoes-box-normal",
                  style: { "margin-bottom": "20px" }
                }, [
                  vue.createElementVNode("image", {
                    src: item.src,
                    mode: "widthFix",
                    class: "shoes-img"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "shoes-body" }, [
                    vue.createElementVNode("view", { class: "shoes-title" }, [
                      item.season == "summer" ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "shoes-title-mark-summer"
                      }, "2021\u5E74\u590F\u5B63")) : item.season == "spring" ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 1,
                        class: "shoes-title-mark-spring"
                      }, "2021\u5E74\u6625\u5B63")) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("text", { class: "shoes-title-name" }, vue.toDisplayString(item.title), 1)
                    ]),
                    vue.createElementVNode("view", { class: "shoes-desc" }, vue.toDisplayString(item.desc), 1),
                    vue.createElementVNode("view", { class: "shoes-price" }, [
                      vue.createTextVNode("\uFFE5"),
                      vue.createElementVNode("text", null, vue.toDisplayString(item.price), 1)
                    ])
                  ])
                ]);
              }), 256))
            ])
          ])
        ])
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
  const _sfc_main$6 = {
    data() {
    },
    methods: {
      getPhoto() {
        uni.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
          success: function(res) {
            formatAppLog("log", "at pages/photograph/photograph.vue:70", JSON.stringify(res.tempFilePaths));
          }
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "g-main" }, [
        vue.createElementVNode("image", {
          src: "/static/images/photograph/feet.png",
          mode: "widthFix",
          style: { "width": "100%" }
        }),
        vue.createElementVNode("view", {
          class: "takePhoto",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.getPhoto && $options.getPhoto(...args))
        }, [
          vue.createElementVNode("image", {
            src: "/static/images/photograph/takePhoto.png",
            mode: "widthFix",
            style: { "width": "76rpx" }
          })
        ]),
        vue.createElementVNode("view", { class: "resTable" }, [
          vue.createElementVNode("view", { class: "res-tr" }, [
            vue.createElementVNode("view", { class: "res-title" }),
            vue.createElementVNode("view", { class: "res-left" }, "\u5DE6"),
            vue.createElementVNode("view", { class: "res-unit" }),
            vue.createElementVNode("view", { class: "res-right" }, "\u53F3"),
            vue.createElementVNode("view", { class: "res-unit" })
          ]),
          vue.createElementVNode("view", { class: "res-tr" }, [
            vue.createElementVNode("view", { class: "res-title" }, "\u811A\u957F"),
            vue.createElementVNode("view", { class: "res-left" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm"),
            vue.createElementVNode("view", { class: "res-right" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm")
          ]),
          vue.createElementVNode("view", { class: "res-tr" }, [
            vue.createElementVNode("view", { class: "res-title" }, "\u811A\u5BBD"),
            vue.createElementVNode("view", { class: "res-left" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm"),
            vue.createElementVNode("view", { class: "res-right" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm")
          ]),
          vue.createElementVNode("view", { class: "res-tr" }, [
            vue.createElementVNode("view", { class: "res-title" }, "\u811A\u9AD8"),
            vue.createElementVNode("view", { class: "res-left" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm"),
            vue.createElementVNode("view", { class: "res-right" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm")
          ]),
          vue.createElementVNode("view", { class: "res-tr" }, [
            vue.createElementVNode("view", { class: "res-title" }, "\u811A\u5E95\u5BBD\u5EA6"),
            vue.createElementVNode("view", { class: "res-left" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm"),
            vue.createElementVNode("view", { class: "res-right" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm")
          ]),
          vue.createElementVNode("view", { class: "res-tr" }, [
            vue.createElementVNode("view", { class: "res-title" }, "\u811A\u8DDF"),
            vue.createElementVNode("view", { class: "res-left" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm"),
            vue.createElementVNode("view", { class: "res-right" }),
            vue.createElementVNode("view", { class: "res-unit" }, "cm")
          ])
        ])
      ])
    ]);
  }
  var PagesPhotographPhotograph = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
  const _sfc_main$5 = {
    data() {
    },
    methods: {
      toMyAddress() {
        uni.navigateTo({
          url: "./myAddress/myAddress",
          events: {
            acceptDataFromOpenedPage: function(data) {
              formatAppLog("log", "at pages/shoes/shoes.vue:90", data);
            },
            someEvent: function(data) {
              formatAppLog("log", "at pages/shoes/shoes.vue:93", data);
            }
          },
          success: function(res) {
            res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
            formatAppLog("log", "at pages/shoes/shoes.vue:99", res);
          },
          fail: function(res) {
            formatAppLog("log", "at pages/shoes/shoes.vue:102", res);
          }
        });
      },
      toMyFav() {
        uni.navigateTo({
          url: "./myFav/myFav",
          events: {
            acceptDataFromOpenedPage: function(data) {
              formatAppLog("log", "at pages/shoes/shoes.vue:112", data);
            },
            someEvent: function(data) {
              formatAppLog("log", "at pages/shoes/shoes.vue:115", data);
            }
          },
          success: function(res) {
            res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
            formatAppLog("log", "at pages/shoes/shoes.vue:121", res);
          },
          fail: function(res) {
            formatAppLog("log", "at pages/shoes/shoes.vue:124", res);
          }
        });
      },
      undevelopedFunc() {
        uni.showToast({
          title: "\u656C\u8BF7\u671F\u5F85",
          image: "../../static/error.png",
          duration: 1e3
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: ".container" }, [
      vue.createElementVNode("view", { class: "g-header" }, [
        vue.createElementVNode("view", { class: "headImg-box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/shoes/user-head.png",
            style: { "width": "100%" },
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "header-desc" }, [
          vue.createElementVNode("view", { class: "header-name" }, [
            vue.createElementVNode("text", null, "\u5170\u6F88\u3002")
          ]),
          vue.createElementVNode("view", { class: "header-credit" }, [
            vue.createTextVNode("\u5F53\u524D\u4FE1\u7528\u79EF\u5206 "),
            vue.createElementVNode("text", { style: { "color": "#4797EB" } }, "1325")
          ])
        ]),
        vue.createElementVNode("view", { class: "header-setting" }, [
          vue.createElementVNode("image", {
            style: { "width": "40rpx", "height": "40rpx" },
            src: "/static/images/shoes/setting.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "g-main" }, [
        vue.createElementVNode("view", { class: "st-box" }, [
          vue.createElementVNode("view", { class: "st-box-desc" }, [
            vue.createElementVNode("image", {
              class: "st-box-desc-img",
              src: "/static/images/shoes/orders.png"
            }),
            vue.createElementVNode("text", null, "\u6211\u7684\u8BA2\u5355")
          ]),
          vue.createElementVNode("view", {
            class: "st-box-desc",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toMyFav && $options.toMyFav(...args))
          }, [
            vue.createElementVNode("image", {
              class: "st-box-desc-img",
              src: "/static/images/shoes/favorites.png"
            }),
            vue.createElementVNode("text", null, "\u6211\u7684\u6536\u85CF")
          ]),
          vue.createElementVNode("view", { class: "st-box-desc" }, [
            vue.createElementVNode("image", {
              class: "st-box-desc-img",
              src: "/static/images/shoes/shoppingBag.png"
            }),
            vue.createElementVNode("text", null, "\u5386\u53F2\u53D1\u5E03")
          ]),
          vue.createElementVNode("view", { class: "st-box-desc" }, [
            vue.createElementVNode("image", {
              class: "st-box-desc-img",
              src: "/static/images/shoes/follow.png"
            }),
            vue.createElementVNode("text", null, "\u6211\u7684\u5173\u6CE8")
          ])
        ]),
        vue.createElementVNode("view", { class: "line" }),
        vue.createElementVNode("view", {
          class: "md-box",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.toMyAddress && $options.toMyAddress(...args))
        }, [
          vue.createElementVNode("view", { class: "md-box-left" }, [
            vue.createElementVNode("image", {
              style: { "width": "56rpx", "height": "56rpx" },
              src: "/static/images/shoes/location.png"
            }),
            vue.createElementVNode("text", null, "\u6536\u8D27\u5730\u5740")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              style: { "width": "60rpx", "height": "60rpx" },
              src: "/static/images/shoes/rightArrow.png"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "line" }),
        vue.createElementVNode("view", {
          class: "md-box",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.undevelopedFunc && $options.undevelopedFunc(...args))
        }, [
          vue.createElementVNode("view", { class: "md-box-left" }, [
            vue.createElementVNode("image", {
              style: { "width": "56rpx", "height": "56rpx" },
              src: "/static/images/shoes/service.png"
            }),
            vue.createElementVNode("text", null, "\u5728\u7EBF\u5BA2\u670D")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              style: { "width": "60rpx", "height": "60rpx" },
              src: "/static/images/shoes/rightArrow.png"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "line" }),
        vue.createElementVNode("view", { class: "md-box" }, [
          vue.createElementVNode("view", { class: "md-box-left" }, [
            vue.createElementVNode("image", {
              style: { "width": "56rpx", "height": "56rpx" },
              src: "/static/images/shoes/feedback.png"
            }),
            vue.createElementVNode("text", null, "\u6211\u8981\u53CD\u9988")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              style: { "width": "60rpx", "height": "60rpx" },
              src: "/static/images/shoes/rightArrow.png"
            })
          ])
        ])
      ])
    ]);
  }
  var PagesShoesShoes = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const _sfc_main$4 = {
    data() {
      return {
        index: 0
      };
    },
    methods: {
      cgPane(idx) {
        formatAppLog("log", "at pages/shops/shops.vue:261", this.$data.index);
        this.$data.index = idx;
      },
      toStPane(parm1, parm2) {
        uni.navigateTo({
          url: "./stPane/stPane",
          events: {
            acceptDataFromOpenedPage: function(data) {
              formatAppLog("log", "at pages/shops/shops.vue:270", data);
            },
            someEvent: function(data) {
              formatAppLog("log", "at pages/shops/shops.vue:273", data);
            }
          },
          success: function(res) {
            res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
            formatAppLog("log", "at pages/shops/shops.vue:279", res);
          },
          fail: function(res) {
            formatAppLog("log", "at pages/shops/shops.vue:282", res);
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "m-header" }, [
        vue.createElementVNode("view", { class: "m-shader" })
      ]),
      vue.createElementVNode("view", { class: "g-main" }, [
        vue.createElementVNode("view", { class: "m-tab" }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["tab-li", $data.index == 0 ? "li-st" : ""]),
            onClick: _cache[0] || (_cache[0] = ($event) => $options.cgPane(0))
          }, [
            vue.createElementVNode("text", null, "\u7537\u58EB\u4E13\u533A")
          ], 2),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["tab-li", $data.index == 1 ? "li-st" : ""]),
            onClick: _cache[1] || (_cache[1] = ($event) => $options.cgPane(1))
          }, [
            vue.createElementVNode("text", null, "\u5973\u58EB\u4E13\u533A")
          ], 2),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["tab-li", $data.index == 2 ? "li-st" : ""]),
            onClick: _cache[2] || (_cache[2] = ($event) => $options.cgPane(2))
          }, [
            vue.createElementVNode("text", null, "\u513F\u7AE5\u4E13\u533A")
          ], 2),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["tab-li", $data.index == 3 ? "li-st" : ""]),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.cgPane(3))
          }, [
            vue.createElementVNode("text", null, "\u8001\u4EBA\u4E13\u533A")
          ], 2),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["tab-li", $data.index == 4 ? "li-st" : ""]),
            onClick: _cache[4] || (_cache[4] = ($event) => $options.cgPane(4))
          }, [
            vue.createElementVNode("text", null, "\u5B55\u5987\u4E13\u533A")
          ], 2)
        ]),
        vue.createElementVNode("view", {
          id: "m-body-man",
          class: "m-body",
          style: vue.normalizeStyle($data.index == 0 ? "display: flex;" : "display: none;")
        }, [
          vue.createElementVNode("view", { class: "body-img" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shops/man.png",
              mode: "widthFix",
              class: "m-body-img"
            }),
            vue.createElementVNode("text", null, "\u7537\u58EB\u4E13\u533A")
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", {
              class: "body-li",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.toStPane("\u7537", "\u8FD0\u52A8\u978B"))
            }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/man_yd.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u8FD0\u52A8\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/man_xx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u4F11\u95F2\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/man_zz.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u6B63\u88C5\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/man_fb.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5E06\u5E03\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/man_ld.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u8001\u7239\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/man_gz.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5DE5\u88C5\u978B")
            ])
          ])
        ], 4),
        vue.createElementVNode("view", {
          class: "m-body",
          id: "m-body-woman",
          style: vue.normalizeStyle($data.index == 1 ? "display: flex;" : "display: none;")
        }, [
          vue.createElementVNode("view", { class: "body-img" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shops/woman.png",
              mode: "widthFix",
              class: "m-body-img"
            }),
            vue.createElementVNode("text", null, "\u5973\u58EB\u4E13\u533A")
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/woman_xx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u4F11\u95F2\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/woman_dx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5355\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/woman_gg.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u9AD8\u8DDF\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/woman_md.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u9A6C\u4E01\u9774")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/woman_yd.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u8FD0\u52A8\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/woman_lx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u51C9\u978B")
            ])
          ])
        ], 4),
        vue.createElementVNode("view", {
          class: "m-body",
          id: "m-body-woman",
          style: vue.normalizeStyle($data.index == 2 ? "display: flex;" : "display: none;")
        }, [
          vue.createElementVNode("view", { class: "body-img" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shops/child.png",
              mode: "widthFix",
              class: "m-body-img"
            }),
            vue.createElementVNode("text", null, "\u513F\u7AE5\u4E13\u533A")
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/child_xx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u4F11\u95F2\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/child_fb.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5E06\u5E03\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/child_gz.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u516C\u4E3B\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/child_yx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u96E8\u9774")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/child_mx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u68C9\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/child_lx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u51C9\u978B")
            ])
          ])
        ], 4),
        vue.createElementVNode("view", {
          class: "m-body",
          id: "m-body-woman",
          style: vue.normalizeStyle($data.index == 3 ? "display: flex;" : "display: none;")
        }, [
          vue.createElementVNode("view", { class: "body-img" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shops/old.png",
              mode: "widthFix",
              class: "m-body-img"
            }),
            vue.createElementVNode("text", null, "\u8001\u4EBA\u4E13\u533A")
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/old_xx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u4F11\u95F2\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/old_bx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5E03\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/old_bb.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u7238\u7238\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/old_mm.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5988\u5988\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/old_mx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u68C9\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/old_lx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u51C9\u978B")
            ])
          ])
        ], 4),
        vue.createElementVNode("view", {
          class: "m-body",
          id: "m-body-woman",
          style: vue.normalizeStyle($data.index == 4 ? "display: flex;" : "display: none;")
        }, [
          vue.createElementVNode("view", { class: "body-img" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shops/pregnant.png",
              mode: "widthFix",
              class: "m-body-img"
            }),
            vue.createElementVNode("text", null, "\u5B55\u5987\u4E13\u533A")
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/pregnant_yz.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u6708\u5B50\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/pregnant_dx.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5355\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/pregnant_doud.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u8C46\u8C46\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/pregnant_pd.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u5E73\u5E95\u978B")
            ])
          ]),
          vue.createElementVNode("view", { class: "m-body-row" }, [
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/pregnant_dongd.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u6D1E\u6D1E\u978B")
            ]),
            vue.createElementVNode("view", { class: "body-li" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shops/pregnant_mm.png",
                mode: "widthFix",
                class: "body-li-img"
              }),
              vue.createElementVNode("text", null, "\u6BDB\u6BDB\u978B")
            ])
          ])
        ], 4)
      ])
    ]);
  }
  var PagesShopsShops = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "g-main" }, [
        vue.createElementVNode("view", { class: "m-body" }, [
          vue.createElementVNode("view", { class: "m-box" }, [
            vue.createElementVNode("view", { class: "box-lt cl-blue" }, [
              vue.createElementVNode("text", null, "\u5170")
            ]),
            vue.createElementVNode("view", { class: "box-bd" }, [
              vue.createElementVNode("view", { class: "box-bd-top" }, [
                vue.createElementVNode("text", null, "\u5170\u6F88"),
                vue.createElementVNode("text", { style: { "margin-left": "32rpx" } }, "18057153505")
              ]),
              vue.createElementVNode("view", { class: "box-bd-bt" }, [
                vue.createElementVNode("text", null, "\u6D59\u6C5F\u7701 \u676D\u5DDE\u5E02 \u4F59\u676D\u533A \u4ED3\u524D\u8857\u9053"),
                vue.createElementVNode("text", null, "\u4F59\u676D\u5858\u8DEF2318\u53F7B\u533A\u83DC\u9E1F\u9A7F\u7AD9")
              ])
            ]),
            vue.createElementVNode("view", { class: "box-rt" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shoes/address/edit.png",
                mode: "widthFix",
                style: { "width": "50rpx" }
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "m-box" }, [
            vue.createElementVNode("view", { class: "box-lt cl-green" }, [
              vue.createElementVNode("text", null, "\u5170")
            ]),
            vue.createElementVNode("view", { class: "box-bd" }, [
              vue.createElementVNode("view", { class: "box-bd-top" }, [
                vue.createElementVNode("text", null, "\u5170\u6F88"),
                vue.createElementVNode("text", { style: { "margin-left": "32rpx" } }, "18057153505")
              ]),
              vue.createElementVNode("view", { class: "box-bd-bt" }, [
                vue.createElementVNode("text", null, "\u6D59\u6C5F\u7701 \u676D\u5DDE\u5E02 \u4F59\u676D\u533A \u4ED3\u524D\u8857\u9053"),
                vue.createElementVNode("text", null, "\u4F59\u676D\u5858\u8DEF2318\u53F7B\u533A\u83DC\u9E1F\u9A7F\u7AD9")
              ])
            ]),
            vue.createElementVNode("view", { class: "box-rt" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shoes/address/edit.png",
                mode: "widthFix",
                style: { "width": "50rpx" }
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "m-box" }, [
            vue.createElementVNode("view", { class: "box-lt cl-red" }, [
              vue.createElementVNode("text", null, "\u5170")
            ]),
            vue.createElementVNode("view", { class: "box-bd" }, [
              vue.createElementVNode("view", { class: "box-bd-top" }, [
                vue.createElementVNode("text", null, "\u5170\u6F88"),
                vue.createElementVNode("text", { style: { "margin-left": "32rpx" } }, "18057153505")
              ]),
              vue.createElementVNode("view", { class: "box-bd-bt" }, [
                vue.createElementVNode("text", null, "\u6D59\u6C5F\u7701 \u676D\u5DDE\u5E02 \u4F59\u676D\u533A \u4ED3\u524D\u8857\u9053"),
                vue.createElementVNode("text", null, "\u4F59\u676D\u5858\u8DEF2318\u53F7B\u533A\u83DC\u9E1F\u9A7F\u7AD9")
              ])
            ]),
            vue.createElementVNode("view", { class: "box-rt" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shoes/address/edit.png",
                mode: "widthFix",
                style: { "width": "50rpx" }
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "m-box" }, [
            vue.createElementVNode("view", { class: "box-lt cl-red" }, [
              vue.createElementVNode("text", null, "\u5170")
            ]),
            vue.createElementVNode("view", { class: "box-bd" }, [
              vue.createElementVNode("view", { class: "box-bd-top" }, [
                vue.createElementVNode("text", null, "\u5170\u6F88"),
                vue.createElementVNode("text", { style: { "margin-left": "32rpx" } }, "18057153505")
              ]),
              vue.createElementVNode("view", { class: "box-bd-bt" }, [
                vue.createElementVNode("text", null, "\u6D59\u6C5F\u7701 \u676D\u5DDE\u5E02 \u4F59\u676D\u533A \u4ED3\u524D\u8857\u9053"),
                vue.createElementVNode("text", null, "\u4F59\u676D\u5858\u8DEF2318\u53F7B\u533A\u83DC\u9E1F\u9A7F\u7AD9")
              ])
            ]),
            vue.createElementVNode("view", { class: "box-rt" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shoes/address/edit.png",
                mode: "widthFix",
                style: { "width": "50rpx" }
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "m-box" }, [
            vue.createElementVNode("view", { class: "box-lt cl-red" }, [
              vue.createElementVNode("text", null, "\u5170")
            ]),
            vue.createElementVNode("view", { class: "box-bd" }, [
              vue.createElementVNode("view", { class: "box-bd-top" }, [
                vue.createElementVNode("text", null, "\u5170\u6F88"),
                vue.createElementVNode("text", { style: { "margin-left": "32rpx" } }, "18057153505")
              ]),
              vue.createElementVNode("view", { class: "box-bd-bt" }, [
                vue.createElementVNode("text", null, "\u6D59\u6C5F\u7701 \u676D\u5DDE\u5E02 \u4F59\u676D\u533A \u4ED3\u524D\u8857\u9053"),
                vue.createElementVNode("text", null, "\u4F59\u676D\u5858\u8DEF2318\u53F7B\u533A\u83DC\u9E1F\u9A7F\u7AD9")
              ])
            ]),
            vue.createElementVNode("view", { class: "box-rt" }, [
              vue.createElementVNode("image", {
                src: "/static/images/shoes/address/edit.png",
                mode: "widthFix",
                style: { "width": "50rpx" }
              })
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "m-tabber" }, [
          vue.createCommentVNode(' <view type="default" class="m-btn"></view> '),
          vue.createElementVNode("button", {
            type: "default",
            class: "m-btn"
          }, [
            vue.createElementVNode("image", {
              src: "/static/images/shoes/address/newAddress.png",
              mode: "widthFix",
              style: { "width": "40rpx" }
            }),
            vue.createElementVNode("text", { style: { "font-size": "30rpx", "font-weight": "550" } }, "\u65B0\u5EFA+")
          ])
        ])
      ])
    ]);
  }
  var PagesShoesMyAddressMyAddress = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "container",
      style: { "background-color": "#f5f5f5", "padding": "30rpx 16rpx 28rpx 16rpx" }
    }, [
      vue.createElementVNode("view", { class: "schBox" }, [
        vue.createElementVNode("input", {
          type: "text",
          value: ""
        }),
        vue.createElementVNode("view", { class: "sch-btn" }, " \u641C\u7D22 ")
      ]),
      vue.createElementVNode("view", { class: "favPane" }, [
        vue.createElementVNode("view", { class: "sortList" }, [
          vue.createElementVNode("view", { style: { "display": "flex" } }, [
            vue.createElementVNode("view", { class: "stLi" }, [
              vue.createTextVNode(" \u978B\u9774\u5206\u7C7B "),
              vue.createElementVNode("image", {
                src: "/static/images/shoes/favorite/arrow.png",
                mode: "widthFix"
              })
            ]),
            vue.createElementVNode("view", { class: "stLi" }, [
              vue.createTextVNode(" \u6536\u85CF\u65F6\u95F4 "),
              vue.createElementVNode("image", {
                src: "/static/images/shoes/favorite/arrow.png",
                mode: "widthFix"
              })
            ])
          ]),
          vue.createElementVNode("image", {
            src: "/static/images/shoes/favorite/edit.png",
            mode: "widthFix",
            class: "favEdit"
          })
        ]),
        vue.createElementVNode("view", { class: "shoesList" }, [
          vue.createElementVNode("view", { class: "shoesLi" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shoes/favorite/shoes1.jpg",
              mode: "widthFix",
              class: "shoesLi-img"
            }),
            vue.createElementVNode("view", { class: "shoesLi-text" }, [
              vue.createElementVNode("text", { class: "shoesLi-text-title" }, "\u674E\u5B81 \u97E6\u5FB7\u4E4B\u90537"),
              vue.createElementVNode("text", { class: "shoesLi-text-content" }, "\u7EAA\u5FF5\u7248/\u767D\u8272/\u8367\u5149\u7CD6\u7C89"),
              vue.createElementVNode("view", { class: "shoesLi-price" }, [
                vue.createElementVNode("text", { class: "shoesLi-price-text" }, "\uFFE5 569.00"),
                vue.createElementVNode("text"),
                vue.createElementVNode("button", {
                  type: "default",
                  class: "shoesLi-price-btn"
                }, [
                  vue.createElementVNode("text", null, "\u8BE6\u60C5")
                ])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "shoesLi" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shoes/favorite/shoes2.jpg",
              mode: "widthFix",
              class: "shoesLi-img"
            }),
            vue.createElementVNode("view", { class: "shoesLi-text" }, [
              vue.createElementVNode("text", { class: "shoesLi-text-title" }, "\u674E\u5B81 \u9A6D\u5E0511"),
              vue.createElementVNode("text", { class: "shoesLi-text-content" }, "\u6C34\u871C\u6843"),
              vue.createElementVNode("view", { class: "shoesLi-price" }, [
                vue.createElementVNode("text", { class: "shoesLi-price-text" }, "\uFFE5 499.00"),
                vue.createElementVNode("text"),
                vue.createElementVNode("button", {
                  type: "default",
                  class: "shoesLi-price-btn"
                }, [
                  vue.createElementVNode("text", null, "\u8BE6\u60C5")
                ])
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  var PagesShoesMyFavMyFav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  var stRes = {
    "items": {
      "page": "1",
      "page_size": 5,
      "real_total_results": 5,
      "total_results": 5,
      "pagecount": 1,
      "data_from": "top",
      "item": [
        {
          "title": "2021\u6625\u88C5\u65B0\u6B3E\u767E\u642D\u725B\u4ED4\u5916\u5957\u5973\u88C5\u5BBD\u677E\u97E9\u7248\u5B66\u751FBF\u4E0A\u8863\u5927\u7801\u7F51\u7EA2\u6F6Eins",
          "num_iid": 544092135549,
          "price": "89.9",
          "sales": 777,
          "orginal_price": "219",
          "promotion_price": "89.9",
          "pic_url": "https://img.alicdn.com/bao/uploaded/i1/3029542506/O1CN01uBZN251UNn6HnxFbR_!!3029542506.jpg",
          "area": "\u5E7F\u4E1C \u4E1C\u839E",
          "seller_id": 3029542506,
          "seller_nick": "adllmas\u65D7\u8230\u5E97",
          "detail_url": "https://detail.tmall.com/item.htm?id=544092135549"
        },
        {
          "title": "\u8584\u6B3E\u6BDB\u8863\u9542\u7A7A\u9488\u7EC7\u886B\u6625\u79CB2021\u65B0\u6B3E\u5973\u88C5\u97E9\u7248\u5BBD\u677E\u4E03\u5206\u8896\u6253\u5E95\u886B\u4E0A\u8863",
          "num_iid": 615045210398,
          "price": "59.9",
          "sales": 3132,
          "orginal_price": "209",
          "promotion_price": "59.9",
          "pic_url": "https://img.alicdn.com/bao/uploaded/i2/928002780/O1CN01GqzLsy1WPHed64sKH_!!0-item_pic.jpg",
          "area": "\u5E7F\u4E1C \u4E1C\u839E",
          "seller_id": 928002780,
          "seller_nick": "\u4E03\u5F69\u4EA6\u9177\u5973\u88C5\u65D7\u8230\u5E97",
          "detail_url": "https://detail.tmall.com/item.htm?id=615045210398"
        },
        {
          "title": "2020\u65B0\u6B3E\u8F7B\u8584\u7FBD\u7ED2\u670D\u5973\u77ED\u6B3E\u8FDE\u5E3D\u7ACB\u9886\u8584\u6B3E\u8F7B\u4FBF\u767D\u9E2D\u7ED2\u77ED\u5916\u5957\u5973\u88C5\u5927\u7801",
          "num_iid": 604306550217,
          "price": "109",
          "sales": 312,
          "orginal_price": "109",
          "promotion_price": "109",
          "pic_url": "https://img.alicdn.com/bao/uploaded/i1/3453507423/O1CN01Wpb4S524hmd5qx1AJ_!!0-item_pic.jpg",
          "area": "\u6D59\u6C5F \u5609\u5174",
          "seller_id": 3453507423,
          "seller_nick": "uhlulc\u670D\u9970\u65D7\u8230\u5E97",
          "detail_url": "https://detail.tmall.com/item.htm?id=604306550217"
        },
        {
          "title": "\u4E54\u59AE\u5854\u54C1\u724C\u5973\u88C52021\u79CB\u51AC\u5B63\u65B0\u6B3E\u7F8A\u6BDB\u5462\u5B50\u4E2D\u957F\u6B3E\u53CC\u9762\u5462\u7F8A\u7ED2\u5927\u8863\u5916\u5957",
          "num_iid": 575156770253,
          "price": "498",
          "sales": 28,
          "orginal_price": "2958",
          "promotion_price": "498",
          "pic_url": "https://img.alicdn.com/bao/uploaded/i1/3568598069/O1CN0129TeK0RkAItyzoX_!!0-item_pic.jpg",
          "area": "\u6E56\u5317 \u6B66\u6C49",
          "seller_id": 3568598069,
          "seller_nick": "\u4E54\u59AE\u5854\u65D7\u8230\u5E97",
          "detail_url": "https://detail.tmall.com/item.htm?id=575156770253"
        },
        {
          "title": "\u5927\u7801\u8FDE\u8863\u88D9\u5973\u88C52021\u6625\u5B63\u65B0\u6B3E\u80D6\u59B9\u59B9\u9ED1\u8272V\u9886\u5BBD\u677E\u663E\u7626\u4E2D\u957F\u6B3E\u88D9\u5B50\u5973",
          "num_iid": 606320525201,
          "price": "189.9",
          "sales": 0,
          "orginal_price": "189.9",
          "promotion_price": "189.9",
          "pic_url": "https://img.alicdn.com/bao/uploaded/i3/1071739966/O1CN01kz7lHZ2NUTqqzlTm7_!!1071739966.jpg",
          "area": "\u6D59\u6C5F \u6E29\u5DDE",
          "seller_id": 1071739966,
          "seller_nick": "tb8558537_11",
          "detail_url": "https://item.taobao.com/item.htm?id=606320525201"
        }
      ],
      "item_weight_update": 0
    },
    "error_code": "0000",
    "reason": "ok",
    "secache": "a8881ed5637e3c7e84f03acdc86be64f",
    "secache_time": 1615339156,
    "secache_date": "2021-03-10 09:19:16",
    "translate_status": "",
    "translate_time": 0,
    "language": {
      "default_lang": "cn",
      "current_lang": "cn"
    },
    "error": "",
    "cache": 0,
    "api_info": "today:7 max:10000",
    "execution_time": 2.848,
    "server_time": "Beijing/2021-03-10 09:19:16",
    "client_ip": "106.6.35.144",
    "call_args": {
      "q": "\u5973\u88C5",
      "start_price": "0",
      "end_price": "0",
      "page": "1",
      "cat": "0"
    },
    "api_type": "taobao",
    "translate_language": "zh-CN",
    "translate_engine": "google_cn",
    "server_memory": "5.35MB",
    "request_id": "gw-3.60481e91b98aa"
  };
  const _sfc_main$1 = {
    data() {
      return {
        list: stRes
      };
    },
    methods: {
      showCopy(src) {
        uni.showModal({
          title: "\u6DD8\u53E3\u4EE4",
          content: "\u590D\u5236\u6DD8\u53E3\u4EE4\u5230\u6DD8\u5B9D\u4E0A\u8FDB\u884C\u67E5\u770B",
          confirmColor: "#007CFF",
          success: function(res) {
            if (res.confirm) {
              formatAppLog("log", "at pages/shops/stPane/stPane.vue:46", src);
              uni.setClipboardData({
                data: src,
                success: function() {
                }
              });
              uni.showToast({
                title: "\u590D\u5236\u6210\u529F",
                duration: 1e3
              });
            } else if (res.cancel) {
              formatAppLog("log", "at pages/shops/stPane/stPane.vue:61", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "liPane" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list.items.item, (li) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "shoesLi",
            onClick: ($event) => $options.showCopy(li.detail_url)
          }, [
            vue.createElementVNode("image", {
              src: li.pic_url,
              mode: "widthFix",
              class: "shoesLi-img"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "shoesLi-text" }, [
              vue.createElementVNode("text", { class: "shoesLi-text-title" }, vue.toDisplayString(li.title), 1),
              vue.createCommentVNode(' <text class="shoesLi-text-content">\u7EAA\u5FF5\u7248/\u767D\u8272/\u8367\u5149\u7CD6\u7C89</text> '),
              vue.createElementVNode("view", { class: "shoesLi-price" }, [
                vue.createElementVNode("text", { class: "shoesLi-price-text" }, "\uFFE5 " + vue.toDisplayString(li.price), 1),
                vue.createElementVNode("text"),
                vue.createElementVNode("button", {
                  type: "default",
                  class: "shoesLi-price-btn"
                }, [
                  vue.createElementVNode("text", null, "\u8BE6\u60C5")
                ])
              ])
            ])
          ], 8, ["onClick"]);
        }), 256))
      ]),
      vue.createCommentVNode(' <view class="uni-mask" style="display: flex;justify-content: center;align-items: center;">\r\n			<view class="copyPane">\r\n				\r\n			</view>\r\n		</view> ')
    ]);
  }
  var PagesShopsStPaneStPane = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/photograph/photograph", PagesPhotographPhotograph);
  __definePage("pages/shoes/shoes", PagesShoesShoes);
  __definePage("pages/shops/shops", PagesShopsShops);
  __definePage("pages/shoes/myAddress/myAddress", PagesShoesMyAddressMyAddress);
  __definePage("pages/shoes/myFav/myFav", PagesShoesMyFavMyFav);
  __definePage("pages/shops/stPane/stPane", PagesShopsStPaneStPane);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
