  const data = ` {
    "primary_target": {
      "t0": {
        "node": "company xyz"
      }
    },
    "critical_systems": {
      "csv0": {
        "node": "system 0"
      },
      "csv1": {
        "node": "system 1"
      },
      "csv2": {
        "node": "system 2"
      }
    },
    "activity_groups": {
      "agv0": {
        "node": "group 0",
        "links": {
          "l1": "system 0",
          "l2": "system 1"
        }
      },
      "agv1": {
        "node": "group 1",
        "links": {
          "l1": "system 0"
        }
      },
      "agv2": {
        "node": "group 2",
        "links": {
          "l1": "system 3"
        }
      }
    },
    "adversaries": {
      "adv0": {
        "node": "adversary 0"
      },
      "adv1": {
        "node": "adversary 1"
      }
    },
    "ttps": {
      "ttp0": {
        "node": "ttp 0",
        "links": {
          "l1": "adversary 0"
        }
      },
      "ttp1": {
        "node": "ttp 1",
        "links": {
          "l1": "adversary 0",
          "l2": "adversary 1"
        }
      },
      "ttp2": {
        "node": "ttp 2",
        "links": {
          "l1": "adversary 1"
        }
      }
    }
  }`;

module.exports = {
  data
};