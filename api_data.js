define({ "api": [
  {
    "type": "get",
    "url": "/api",
    "title": "根数据接口",
    "name": "home-list",
    "version": "0.0.1",
    "group": "Home-Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blessing_skin",
            "description": "<p>Blessing-Skin版本</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "spec",
            "description": "<p>spec值</p>"
          },
          {
            "group": "Success 200",
            "type": "TEXT",
            "optional": false,
            "field": "copyright",
            "description": "<p>Blessing-Skin-Server版权信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "site_name",
            "description": "<p>站点名“洛天依主题皮肤站”</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"blessing_skin\": \"6.0.0-beta.3\",\n    \"spec\": 0,\n    \"copyright\": \"由 Blessing Skin Server 强力驱动。\",\n    \"site_name\": \"洛天依主题皮肤站\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>错误的请求头,返回不存在</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\":\"数据加载错误，请重试\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/home/01-home.coffee",
    "groupTitle": "Home-Info"
  },
  {
    "type": "get/post",
    "url": "/home/image",
    "title": "图片路径接口",
    "name": "home-image",
    "version": "0.0.1",
    "group": "function",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>图片路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n  \"path\": \"http://×××××/5U99L68Ud3.png\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/home/01-home.coffee",
    "groupTitle": "function"
  }
] });
