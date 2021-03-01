import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dropdownList;
  dropdownSettings;
  selectedItems = [];

  ngOnInit(){

    this.dropdownList = this.getData();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: false
    };
  }

  onItemSelect($event){
    let data = this.getData();
    let selectedItem = data.filter(item => item.item_id == $event.item_id);
    let selectedItemGroup = selectedItem[0]['group'];
    this.dropdownList = data.map(item => {
      if(item.group == selectedItemGroup){
        item.isDisabled = false;
      } else {
        item.isDisabled = true;
      }
      return item;
    })
  }

  onItemDeSelect(){
    if(this.selectedItems && this.selectedItems.length == 0){
      this.dropdownList = this.dropdownList.map(item => {
        item.isDisabled = false;
        return item;
      })
    }
  }

  getData() : Array<any>{
    return [
      { item_id: 1, item_text: 'Apple', group : 'F' },
      { item_id: 2, item_text: 'Orange', group : 'F' },
      { item_id: 3, item_text: 'Potatoes', group : 'V' },
      { item_id: 4, item_text: 'Cabbage', group : 'V' },
      { item_id: 5, item_text: 'Cauliflower', group : 'V' }
    ];
  }
}
