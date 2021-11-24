import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeedComponent]
})
export class FeedModule {}