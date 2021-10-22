import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Category } from '../category'

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category = {id:28, name: "Action"};
  constructor(private apiClientService : ApiClientService) { }

  ngOnInit(): void {
    this.selectCategories();
    // this.selectedCategory = this.categories[0];
    // this.changeCategory();
  }

  selectCategories(): void {
    this.apiClientService.selectCategories()
      .subscribe(categories => this.categories = categories);
  }

  changeCategory(category:Category):void {
    this.selectedCategory = category;
    this.apiClientService.getCategoryMovies(this.selectedCategory.id)
        .subscribe(movies => this.apiClientService.addToCategoryCollection(movies))
  }

  // addToCategoryCollection():void {
  //   console.log('add');
  // }

}
