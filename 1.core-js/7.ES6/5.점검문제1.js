const traders = [
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022,
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
  ];
  let a = traders.trader;
  // 연습 1: 2022년에 발생한 모든 거래를 찾아 
  //   거래자 정보(이름, 도시)를 배열에 매핑해주세요 

const tradeIn2022 = traders.filter( trs => trs.year === 2022);
const tradeInr2022 = tradeIn2022.map(trs => trs.trader)

console.log(tradeInr2022);

    


  
  // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const mappedCities = traders.map(trs => trs.trader.city)
console.log(mappedCities);

  // traders
  //   .map(u => u.trader)
  //   .forEach(u => console.log(`거래처들이 근무하는 도시 ${u.city}`));
    

  
  // 연습 3: 대전에 근무하는 
  // 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.

    // traders
    //     .filter(o => o.trader.name === '대전')
    //     .map(o => o.trader)
    //     .forEach(o => console.log(o));  

  
  // 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  traders
    .map(z => z.trader)
    .forEach(z => console.log(z.name));
  
  // 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
 
  traders
  .filter(x => x.trader.city === '서울')
  .reduce((acc, curr) => acc + curr.value);

  console.log(`거래 총액 : ${total}원`);
 
  
  