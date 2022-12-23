

export const colors:string[] = []
const row1:number[] = []
const row2:number[] = []
const row3:number[] = []
const row4:number[] = []
const row5:number[] = []
const row6:number[] = []
const row7:number[] = []
const row8:number[] = []

const generateBoard = () => {
    let count = 0
    for (let i = 0; i < 64; i++) {
      count++
      if(count<=8){
        colors.push("first")
      }else{
        if(count===16){
          count=0
        }
        colors.push("second")
      }
      if(i<=7){
        row1.push(i+1)
      }
      if(i<=15 && i>7 ){
        row2.push(i+1)
      }
      if(i<=23&&i>15){
        row3.push(i+1)
      }
      if(i<=31&&i>23){
        row4.push(i+1)
      }
      if(i<=39&&i>31){
        row5.push(i+1)
      }
      if(i<=47&&i>39){
        row6.push(i+1)
      }
      if(i<=55&&i>47){
        row7.push(i+1)
      }
      if(i<=63&&i>55){
        row8.push(i+1)
      }
    }
  }
  generateBoard()

  export const board:number[][]=[row1,row2,row3,row4,row5,row6,row7,row8]
  export const chess:number[]=[...row1,...row2,...row3,...row4,...row5,...row6,...row7,...row8]
  