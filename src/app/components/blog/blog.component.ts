import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  public courses=[
    {
        id:1,
        name:"Html & CSS",
        img:"html.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:5000,
        duration:"30Days"
    },
    {
        id:2,
        name:"Javascript",
        img:"js.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:6000,
        duration:"20Days"
    },
    {
        id:3,
        name:"Angular",
        img:"angular.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:15000,
        duration:"60Days"
    },
    {
        id:4,
        name:"React Js",
        img:"react.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:18000,
        duration:"50Days"
    },
    {
        id:5,
        name:"Node Js",
        img:"nodejs.webp",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:25000,
        duration:"90Days"
    },
    {
        id:6,
        name:"Photoshop",
        img:"photoshop.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:10000,
        duration:"30Days"
    },
    {
        id:7,
        name:"JAVA",
        img:"java.webp",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:30000,
        duration:"120Days"
    },
    {
        id:8,
        name:"Python",
        img:"python.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        price:28000,
        duration:"90Days"
    },
    {
      id:9,
      name:"SEO",
      img:"html.jpg",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
      price:5000,
      duration:"30Days"
  }
    

]
}
