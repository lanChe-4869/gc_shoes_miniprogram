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
  const _sfc_main$4 = {
    data() {
      return {
        href: "https://uniapp.dcloud.io/component/README?id=uniui"
      };
    },
    methods: {
      getPhoto() {
        uni.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
          success: function(res) {
            formatAppLog("log", "at pages/index/index.vue:116", JSON.stringify(res.tempFilePaths));
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
          src: "https://i.loli.net/2021/07/17/QXwTqtafvgMc6Dl.png",
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
              vue.createElementVNode("view", { class: "shoes-box-big" }, [
                vue.createElementVNode("image", {
                  src: "https://i.loli.net/2021/07/17/mBYJRDozVEkjU3Z.png",
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
              vue.createElementVNode("view", { class: "shoes-box-normal fn-mgTop" }, [
                vue.createElementVNode("image", {
                  src: "https://i.loli.net/2021/07/17/FJBxkg4N1GlRchI.png",
                  mode: "widthFix",
                  class: "shoes-img"
                }),
                vue.createElementVNode("view", { class: "shoes-body" }, [
                  vue.createElementVNode("view", { class: "shoes-title" }, [
                    vue.createElementVNode("text", { class: "shoes-title-mark-summer" }, "2021\u5E74\u590F\u5B63"),
                    vue.createElementVNode("text", { class: "shoes-title-name" }, "LiNing \u674E\u5B81")
                  ]),
                  vue.createElementVNode("view", { class: "shoes-desc" }, "\u53CD\u5149\u4E00\u4F53\u7EC7\u8DD1\u978B"),
                  vue.createElementVNode("view", { class: "shoes-price" }, [
                    vue.createTextVNode("\uFFE5"),
                    vue.createElementVNode("text", null, "899.00")
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "shoes-info-right" }, [
              vue.createElementVNode("view", { class: "shoes-box-normal" }, [
                vue.createElementVNode("image", {
                  src: "https://i.loli.net/2021/07/17/gyCN2tP8pERUDkj.png",
                  mode: "widthFix",
                  class: "shoes-img"
                }),
                vue.createElementVNode("view", { class: "shoes-body" }, [
                  vue.createElementVNode("view", { class: "shoes-title" }, [
                    vue.createElementVNode("text", { class: "shoes-title-mark-summer" }, "2021\u5E74\u590F\u5B63"),
                    vue.createElementVNode("text", { class: "shoes-title-name" }, "LiNing \u674E\u5B81")
                  ]),
                  vue.createElementVNode("view", { class: "shoes-desc" }, "\u51CF\u9707\u56DE\u5F39\u7BEE\u7403\u978B"),
                  vue.createElementVNode("view", { class: "shoes-price" }, [
                    vue.createTextVNode("\uFFE5"),
                    vue.createElementVNode("text", null, "799.00")
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "shoes-box-normal fn-mgTop" }, [
                vue.createElementVNode("image", {
                  src: "https://i.loli.net/2021/07/17/M7RtCvAY26eOjPz.png",
                  mode: "widthFix",
                  class: "shoes-img"
                }),
                vue.createElementVNode("view", { class: "shoes-body" }, [
                  vue.createElementVNode("view", { class: "shoes-title" }, [
                    vue.createElementVNode("text", { class: "shoes-title-mark-spring" }, "2021\u5E74\u6625\u5B63"),
                    vue.createElementVNode("text", { class: "shoes-title-name" }, "HuiLi \u56DE\u529B")
                  ]),
                  vue.createElementVNode("view", { class: "shoes-desc" }, "\u4F11\u95F2\u56DE\u5929\u4E4B\u529B\u677F\u978B"),
                  vue.createElementVNode("view", { class: "shoes-price" }, [
                    vue.createTextVNode("\uFFE5"),
                    vue.createElementVNode("text", null, "318.00")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const _sfc_main$3 = {
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
  var PagesPhotographPhotograph = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {
    data() {
    },
    methods: {
      toMyAddress() {
        formatAppLog("log", "at pages/shoes/shoes.vue:79", "!!!");
        uni.navigateTo({
          url: "./myAddress/myAddress",
          events: {
            acceptDataFromOpenedPage: function(data) {
              formatAppLog("log", "at pages/shoes/shoes.vue:85", data);
            },
            someEvent: function(data) {
              formatAppLog("log", "at pages/shoes/shoes.vue:88", data);
            }
          },
          success: function(res) {
            res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
            formatAppLog("log", "at pages/shoes/shoes.vue:94", res);
          },
          fail: function(res) {
            formatAppLog("log", "at pages/shoes/shoes.vue:97", res);
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: ".container" }, [
      vue.createElementVNode("view", { class: "g-header" }, [
        vue.createElementVNode("view", { class: "headImg-box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/shoes/user.png",
            style: { "width": "100rpx" },
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "header-desc" }, [
          vue.createElementVNode("view", { class: "header-name" }, [
            vue.createElementVNode("text", null, "\u7528\u6237\u540D")
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
          vue.createElementVNode("view", { class: "st-box-desc" }, [
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
          onClick: _cache[0] || (_cache[0] = (...args) => $options.toMyAddress && $options.toMyAddress(...args))
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
        vue.createElementVNode("view", { class: "md-box" }, [
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
  var PagesShoesShoes = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
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
  var PagesShoesMyAddressMyAddress = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
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
  __definePage("pages/shoes/myAddress/myAddress", PagesShoesMyAddressMyAddress);
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
