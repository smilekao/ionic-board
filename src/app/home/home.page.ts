import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  post: {
    userName: string,
    message: string,
    createData: any
  } = {
      userName: 'Taro Yamada',
      message: 'これはテストメッセージです123',
      createdDate: '10分前'
    };

  posts: { userName: string, message: string, createData: any }[]
    = [
      {
        userName: 'Taro Yamada',
        message: 'これはテストメッセージです123',
        createdDate: '10分前'
      },

      {
        userName: 'Jiro Suzuki',
        message: 'ふたつめのテストメッセージです',
        createdDate: '5分前'
      }
    ];
  }