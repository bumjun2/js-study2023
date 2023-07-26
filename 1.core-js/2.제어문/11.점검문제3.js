

let a = +prompt('재미있는 사칙연산 게임 [지겨우면 0 눌러] \n ===난이도 설정=== \n [1.상 1-100] [2. 중 1 - 50] [3.하 1-20]');
if(a ===1){
    alert('상');
    let i = 0;
    let cnt = 0;
    let nt = 0;
    let so;    
    
    while(true){
        i++;
        let num1 = Math.floor(Math.random() * 100) +1;
        let num2 = Math.floor(Math.random() * 100) +1;
        let r = Math.floor(Math.random() * 4) +1;

        
        
        if(r===1){
            so = +prompt(`Q${i}. ${num1} + ${num2} = ??`);
            let sum = num1 + num2;
            if(so === sum){
                alert('정답입니다.');
                cnt++;
            }else if(so != sum && so !=0){
                alert('틀림.');
                nt++;
            }
            if(so === 0){
                alert('게임을 종료합니다');
                break;
            }
        }
        if(r===2){
            if(num1 < num2){
                let tmp = num1;
                num1 = num2;
                num2 = tmp;
            }
            so = +prompt(`Q${i}. ${num1} - ${num2} = ??`);
            let sum = num1 - num2;
            if(so === sum){
                alert('정답입니다.');
                cnt++;
            }else if(so != sum && so !=0){
                alert('틀림.');
                nt++;
            }
            if(so === 0){
                alert('게임을 종료합니다');
                break;
            }
            
        }
        if(r===3){
            so = +prompt(`Q${i}. ${num1} * ${num2} = ??`);
            let sum = num1 * num2;
            if(so === sum){
                alert('정답입니다.');
                cnt++;
            }else if(so != sum && so !=0){
                alert('틀림.');
                nt++;
            }
            if(so === 0){
                alert('게임을 종료합니다');
                break;
            }
        }
        if(r===4){
            so = +prompt(`Q${i}. ${num1} % ${num2} = ??`);
            let sum = num1 % num2;
            
            if(so === 0){
                alert('게임을 종료합니다');
                break;
            }
        } 
 
    }
    alert(`정답횟수 ${cnt} 틀린횟수${nt}`);    
}
if(a ===2){
    alert('중');
    let i = 0;
    let cnt = 0;
    let nt = 0;
    while(true){
        i++;
        let num1 = Math.floor(Math.random() * 50) +1;
        let num2 = Math.floor(Math.random() * 50) +1;
    
        let so = +prompt(`Q${i}. ${num1} + ${num2} = ??`);
        let sum = num1 + num2;
        
        if(so === sum){
            alert('정답입니다.');
            cnt++;
        }else if(so != sum && so !=0){
            alert('틀림.');
            nt++;
        }
        
         if(so === 0){
            alert('게임을 종료합니다');
            break;
        }
    }
    alert(`정답횟수 ${cnt} 틀린횟수${nt}`);    
}

if(a ===3){
    alert('하');
    let i = 0;
    let cnt = 0;
    let nt = 0;
    while(true){
        i++;
        let num1 = Math.floor(Math.random() * 30) +1;
        let num2 = Math.floor(Math.random() * 30) +1;
    
        let so = +prompt(`Q${i}. ${num1} + ${num2} = ??`);
        let sum = num1 + num2;
        
        if(so === sum){
            alert('정답입니다.');
            cnt++;
        }else if(so != sum && so !=0){
            alert('틀림.');
            nt++;
        }
        
         if(so === 0){
            alert('게임을 종료합니다');
            break;
        }
    }
    alert(`정답횟수 ${cnt} 틀린횟수${nt}`);    
}


