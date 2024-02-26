import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public listle:any=[]
  public list:any=[]
  public list_length:any=[]
  public list_chaild:any=[]
  itemIndex: any
  chaildIndex:any
  chaildInde:any
  select:boolean=false
  count=0
  j=0
  i=0
  a=0
  status=false
  llength:any
  public data=[{
     id:1,
     name:"1",
     parentid:null,
     children:[{
       id:1,
     name:"1.1",
     parentid:1,
     children:[{
       id:1,
     name:"1.1.1",
     parentid:1,
     children:[{
      id:1,
    name:"1.1.1.1",
    parentid:1,
    children:null
    }]
     },
    ]
     },
     {
       id:2,
     name:"1.2",
     parentid:1,
     children:[{
      id:1,
      name:"1.2.1",
      parentid:2,
      children:null
      }]
     }],
   },
   {
     id:2,
     name:"2",
     parentid:null,
     children:[{
       id:1,
     name:"2.1",
     parentid:2,
     children:[{
       id:1,
     name:"2.1.1",
     parentid:1,
     children:[{
       id:1,
     name:"2.1.1.1",
     parentid:1,
     children:null
     }]
     }]
     }]
   },
   {
     id:3,
     name:"3",
     parentid:null,
     children:[{
       id:1,
       name:"3.1",
       parentid:3,
       children:[{
         id:1,
         name:"3.1.1",
         parentid:1,
         children:[{
           id:1,
           name:"3.1.1.1",
           parentid:1,
           children:null
         }]
       },{
        id:1,
        name:"3.2.1",
        parentid:1,
        children:[{
          id:1,
          name:"3.1.1.5",
          parentid:1,
          children:null
        }]
      }]
     }]
   }]


   onclick(even:any,index:any){ 
    this.itemIndex = index
    this.chaildIndex=null
   this.chaildInde=null
     if (this.data[even-1].parentid==null) {
       length=this.list.length

       for (let i = 0; i <= this.listle.length; i++) {
        this.listle.pop(0)
      
      }
       for (let i = 0; i < length; i++) {
         this.list.pop(0)
         this.list_chaild.pop(0)
         this.list_length.pop(this.data[even-1].children.length)
         
       }
      if (this.data[even-1].children!=null) {
        for (let i = 0; i < this.data.length; i++) {
          if (index==i) {
            this.select=true
          }
          else {
            this.select=false
          }

          
        }
        this.listle.push(0)
       this.list.push(this.data[even-1].children)
       this.list_chaild.push({name:"0"})
       this.list_length.push(this.data[even-1].children.length)
      }
     } 
     else if (this.data[even-1].children!=null ) {
       this.list.push(even-1)
       this.list.push(this.data[even-1].children)
     } 
 }
 chaild(id:any,name:any,index:any,index2:any,parentid:any){
  this.chaildIndex=index
  this.chaildInde=index2
  while (true) {
    let pointer=index
    for (let i = 0; i < this.list_length.length; i++) {
      this.count+=this.list_length[i] 
    }
    for (let i = 0; i <this.list.length; i++) {
      for (let k = 0; k <this.list_length[i]; k++) {
      if(this.list[i][k].name==name){
        this.j=i
      }        
      }
      
    }
     if (this.list_length.length==this.a && this.list.length!=(this.j+1)) {
      this.llength=this.list.length
      for (let i = 0; i <this.llength-1-this.j; i++) {
        this.list.pop(this.j+1)
        this.listle.pop(this.j+1)
        this.list_length.pop(this.j+1)
        this.list_chaild.pop(0)
        this.a-=1
      }

        for (let i = 0; i <this.llength-index2-this.j; i++) {
          this.list_chaild.pop(this.j)
        }


    }
    if (this.list_length.length==this.a && this.list[this.j][pointer].children!=null ) {
      this.listle.push(this.j+1)
      this.list.push(this.list[this.j][pointer].children)
      for (let i = 0; i < this.list_chaild.length; i++) {
        if (this.list_chaild[i].name==0) {
          this.list_chaild.pop(i)
          
        }
        
      }
      this.list_chaild.push(this.list[this.j][pointer])
      this.list_length.push(this.list[this.j][pointer].children.length)
      this.list_chaild.push({name:"0"})
      break
    }
    else if (this.list_length.length==this.a ) {
      this.status=true
      break
    }
    this.a+=1
  }
  
 }
}
