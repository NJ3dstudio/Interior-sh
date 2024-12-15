var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5810485009111757,
        "pitch": -0.02377539588064792,
        "fov": 1.1981963086633602
      },
      "linkHotspots": [
        {
          "yaw": -1.1784909166126827,
          "pitch": -0.013752844199515835,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5481135138452284,
        "pitch": -0.09235913924409545,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.346088978115196,
          "pitch": 0.1355596600484379,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shahul Interior",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
