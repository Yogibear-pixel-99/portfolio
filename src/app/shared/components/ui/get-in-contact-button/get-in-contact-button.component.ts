import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-in-contact-button',
  imports: [],
  templateUrl: './get-in-contact-button.component.html',
  styleUrl: './get-in-contact-button.component.scss'
})
export class GetInContactButtonComponent implements OnInit, OnDestroy {
translate = inject(TranslateService);
@Input() objSrcName: string = '';


text:string = '';
textSub!: Subscription;

ngOnInit(): void {
  this.textSub = this.translate.stream(this.objSrcName).subscribe((data) => {
    this.text = data;
  })
}

ngOnDestroy(): void {
  this.textSub.unsubscribe();
}
}
