const getWeatherIcon = (code: number) => {
  switch (code) {
    case 1000 || 10000:
      return '/images/sun.png'
    case 10001:
      return '/images/moon.png'
    case 1100:
    case 1101:
    case 11000:
    case 2101:
    case 21010:
    case 2102:
    case 21020:
    case 2106:
    case 21060:
    case 21061:
    case 2107:
    case 1102:
    case 11020:
    case 1001:
    case 10010:
    case 2100:
    case 21000:
    case 21001:
    case 2000:
    case 20000:
    case 2103:
    case 21030:
    case 2108:
    case 21080:
    case 21081:
    case 21070:
      return '/images/sun-cloud.png'
    case 4201:
    case 42010:
    case 42011:
    case 4001:
    case 40010:
    case 40011:
    case 4209:
    case 42090:
    case 42091:
    case 4208:
    case 42080:
    case 42081:
    case 4210:
    case 42100:
    case 42101:
    case 4211:
    case 42110:
    case 42111:
    case 4202:
    case 42020:
    case 42021:
    case 4212:
    case 42120:
    case 42121:
    case 6204:
    case 62040:
    case 62041:
    case 6206:
    case 62060:
    case 62061:
    case 6214:
    case 62140:
    case 62141:
    case 6215:
    case 62150:
    case 62151:
    case 6212:
    case 62120:
    case 62121:
    case 6220:
    case 62200:
    case 62201:
    case 6222:
    case 62220:
    case 62221:
    case 6207:
    case 62070:
    case 62071:
    case 6202:
    case 62020:
    case 62021:
    case 6208:
    case 62080:
    case 62081:
    case 7113:
    case 71130:
    case 71131:
    case 7114:
    case 71140:
    case 71141:
    case 7116:
    case 71160:
    case 71161:
    case 7105:
    case 71050:
    case 71051:
    case 7115:
    case 71150:
    case 71151:
    case 7117:
    case 71170:
    case 71171:
    case 7106:
    case 71060:
    case 71061:
    case 7103:
    case 71030:
    case 71031:
      return '/images/rain.png'
    case 4000:
    case 40000:
    case 40001:
    case 4200:
    case 42000:
    case 42001:
    case 4203:
    case 42030:
    case 42031:
    case 4204:
    case 42040:
    case 42041:
    case 4205:
    case 42050:
    case 42051:
    case 4213:
    case 42130:
    case 42131:
    case 4214:
    case 42140:
    case 42141:
    case 4215:
    case 42150:
    case 42151:
    case 5122:
    case 51220:
    case 51221:
    case 6000:
    case 60000:
    case 60001:
    case 6200:
    case 62000:
    case 62001:
    case 6001:
    case 60010:
    case 60011:
    case 6201:
    case 6003:
    case 60030:
    case 60031:
    case 6002:
    case 60020:
    case 60021:
    case 6004:
    case 60040:
    case 60041:
    case 6205:
    case 62050:
    case 62051:
    case 6203:
    case 62030:
    case 62031:
    case 6209:
    case 62090:
    case 62091:
    case 6213:
    case 62130:
    case 62131:
    case 7102:
    case 71020:
    case 71021:
    case 7000:
    case 70000:
    case 70001:
    case 7101:
    case 71010:
    case 71011:
    case 7110:
    case 71100:
    case 71101:
    case 7111:
    case 71110:
    case 71111:
    case 7112:
    case 71120:
    case 71121:
    case 7108:
    case 71080:
    case 71081:
    case 7107:
    case 71070:
    case 71071:
    case 7109:
    case 71090:
    case 71091:
      return '/images/rain-small.png'
    case 5001:
    case 50010:
    case 50011:
    case 5100:
    case 51000:
    case 51001:
    case 5115:
    case 51150:
    case 51151:
    case 5116:
    case 51160:
    case 51161:
    case 5117:
    case 51170:
    case 51171:
    case 5102:
    case 51020:
    case 51021:
    case 5103:
    case 51030:
    case 51031:
    case 5104:
    case 51040:
    case 51041:
      return '/images/snow-cloud.png'
    case 5000:
    case 50000:
    case 50001:
    case 5101:
    case 51010:
    case 51011:
    case 5105:
    case 51050:
    case 51051:
    case 5106:
    case 51060:
    case 51061:
    case 5107:
    case 51070:
    case 51071:
    case 5119:
    case 51190:
    case 51191:
    case 5120:
    case 51200:
    case 51201:
    case 5121:
    case 51210:
    case 51211:
      return '/images/snow.png'
    case 5110:
    case 51100:
    case 51101:
    case 5108:
    case 51080:
    case 51081:
    case 5114:
    case 51140:
    case 51141:
    case 5112:
    case 51120:
    case 51121:
      return '/images/snow-rain.png'
    case 8000:
    case 80000:
    case 80001:
    case 80010:
    case 80010:
    case 80011:
    case 8003:
    case 80030:
    case 80031:
    case 8002:
    case 80020:
    case 80021:
      return '/images/thunderstorm-rain.png'
  }
}

export default getWeatherIcon