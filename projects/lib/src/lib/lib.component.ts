import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib',
  template: `
    <p>
      THIS IS A COMPONENT INSIDE THE LIBRARY!
      <<br/>
    </p>
  `,
  styles: [
  ]
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
