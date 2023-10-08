const fontSizes = {
  "12": "12px",
  "10": "10px",
};

export const fontTheme = {
  currentWeather: {
    weatherDataCard: {
      titleFontSize: "18px",
    },
    temperature: {
      titleFontSize: "42px",
    },
    descripition: {
      titleFontSize: "20px",
    },
  },
  ShortTermWeather: {
    weatherDataCard: {
      weatherDescription: {
        titleFontSize: ["15px"],
      },
      temperature: {
        main: {
          titleFontSize: ["25px"],
        },
        apparentTemperature: {
          title: {
            titleFontSize: ["11px"],
          },
          main: {
            titleFontSize: ["10px"],
          },
        },
      },
      wind: {
        main: {
          titleFontSize: "20px",
        },
        gust: {
          title: {
            titleFontSize: "10px",
          },
          main: {
            titleFontSize: ["10px"],
          },
        },
      },
    },
  },
  SevenDay: {
    weatherDataCard: {
      dayOfWeek: {
        titleFontSize: ["20px"],
      },
      temperature: {
        temperatureHigh: {
          titleFontSize: ["25px"],
        },
        apparentTemperature: {
          high: {
            title: {
              titleFontSize: [fontSizes[12]],
            },
            main: {
              titleFontSize: [fontSizes[12]],
            },
          },
          low: {
            title: {
              titleFontSize: [fontSizes[12]],
            },
            main: {
              titleFontSize: [fontSizes[12]],
            },
          },
        },
      },
      probabilityOfPrecipitation: {
        title: {
          titleFontSize: [fontSizes[12]],
        },
        main: {
          titleFontSize: [fontSizes[12]],
        },
      },
      precipitationAccumulation: {
        precipitationType: {
          title: { titleFontSize: [fontSizes[10]] },
        },
        accumulation: {
          title: {
            titleFontSize: [fontSizes[12]],
          },
          main: {
            titleFontSize: [fontSizes[12]],
          },
        },
      },
      wind: {
        speed: {
          title: {
            titleFontSize: [fontSizes[12]],
          },
          main: {
            titleFontSize: [fontSizes[12]],
          },
        },
        gust: {
          title: {
            titleFontSize: [fontSizes[12]],
          },
          main: {
            titleFontSize: [fontSizes[12]],
          },
        },
      },
    },
  },
};
