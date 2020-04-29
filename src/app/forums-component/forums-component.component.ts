import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/core/services/topic.service';
@Component({
  selector: 'app-forums-component',
  templateUrl: './forums-component.component.html',
  styleUrls: ['./forums-component.component.css']
})
export class ForumsComponentComponent implements OnInit {
  allTopics : Object = {}
  isTopicsLoaded : boolean = false
  constructor(private topicService: TopicService) { }

  ngOnInit() {
      this.topicService.getAllTopics().subscribe(data => {
          this.allTopics['1'] = data.filter(x => x.forumId == 1).length
          this.allTopics['2'] = data.filter(x => x.forumId == 2).length
          this.allTopics['3'] = data.filter(x => x.forumId == 3).length
          this.allTopics['4'] = data.filter(x => x.forumId == 4).length
          this.allTopics['5'] = data.filter(x => x.forumId == 5).length
          this.allTopics['6'] = data.filter(x => x.forumId == 6).length
          this.allTopics['7'] = data.filter(x => x.forumId == 7).length
          this.allTopics['8'] = data.filter(x => x.forumId == 8).length
          this.isTopicsLoaded = true
      })
  }

}
