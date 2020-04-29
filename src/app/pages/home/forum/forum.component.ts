import { Component, OnInit, Input } from '@angular/core';
import { TopicService } from 'src/app/core/services/topic.service';
import { AddTopicModel } from 'src/app/core/models/topic-models/add-topic.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-forum',
    templateUrl: './forum.component.html',
    styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
    topics: AddTopicModel[]
    forumId: string
    forumName: Object = {
        '1' : 'Registration',
        '2' : 'Jobs',
        '3' : 'Mentorship',
        '4' : 'Organizations',
        '5' : 'Class',
        '6' : 'Study Tips',
        '7' : 'Graduation',
        '8' : 'Connections'
    }

    constructor(private topicService: TopicService,
        private route: ActivatedRoute) {
            this.forumId = this.route.snapshot.params['id']
         }

    ngOnInit() {
        this.topicService.getTopicsByForum(this.forumId).subscribe(data => {
            this.topics = data;
        })
    }

}