import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular/lazy';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.page.html',
  styleUrls: ['./exercise3.page.scss'],
  standalone: false,
})
export class Exercise3Page {
  @ViewChild(IonContent) content!: IonContent;
  readonly paragraphs = Array.from({ length: 8 }, () =>
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed tellus nec mauris auctor dignissim fermentum in risus. Sed nec convallis sapien, id tincidunt enim. Mauris ornare eleifend nunc id mattis. Fusce augue diam, sagittis nec posuere at, consectetur tempor lectus. Nulla at lectus eget mauris iaculis malesuada mollis sed neque. Curabitur et risus tristique, malesuada mauris finibus, elementum massa. Proin lacinia mauris quis ligula blandit ullamcorper. Donec ut posuere lorem. In volutpat magna vitae tellus posuere pulvinar. Nam varius ligula justo, nec placerat lacus pharetra ac. Aenean massa orci, tristique in nisl ut, aliquet consectetur libero. Etiam luctus placerat vulputate. Aliquam ipsum massa, porttitor at mollis ut, pretium sit amet mi. In neque mauris, placerat et neque vel, tempor interdum sem.'
  );

  scrollToTop(): Promise<void> { return this.content.scrollToTop(700); }
  scrollToBottom(): Promise<void> { return this.content.scrollToBottom(700); }
}
