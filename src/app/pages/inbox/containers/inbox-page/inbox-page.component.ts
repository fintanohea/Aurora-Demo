import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss']
})
export class InboxPageComponent implements OnInit, AfterViewChecked {
  convos = [
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Sarah, Mary and 2 others",
      participants: [
        {
          id: 1,
          name: "Sarah Smith Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Sarah Smith",
          profilePic: "/assets/profile-pics/profile1.jpg",
          text: "We should get together Friday evening.",
          time: "1 hour ago",
          self: false
        },
        {
          user: "John Smith",
          profilePic: "/assets/profile-pics/stock-profile.png",
          text: "Im in",
          time: "1 hour ago",
          self: true
        },
        {
          user: "Tom Jones",
          profilePic: "/assets/profile-pics/profile2.jpg",
          text: "Yeah thats a great idea, lets do that",
          time: "1 hour ago",
          self: false
        },
        {
          user: "Mary Quinn",
          profilePic: "/assets/profile-pics/profile3.jpg",
          text: "I will contact the venue and book a table",
          time: "1 hour ago",
          self: false
        },
        {
          user: "John Smith",
          profilePic: "/assets/profile-pics/stock-profile.png",
          text: "sounds good",
          time: "1 hour ago",
          self: true
        },
        {
          user: "Sarah Smith",
          profilePic: "/assets/profile-pics/profile1.jpg",
          text: "Awesome!",
          time: "1 hour ago",
          self: false
        },
        {
          user: "Tom Jones",
          profilePic: "/assets/profile-pics/profile2.jpg",
          text: "See you there",
          time: "1 hour ago",
          self: false
        },
        {
          user: "John Smith",
          profilePic: "/assets/profile-pics/stock-profile.png",
          text: "See you there guys.",
          time: "1 hour ago",
          self: true
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Hello",
      people: "Jane Hew",
      participants: [
        {
          id: 1,
          name: "Jane Hew",
          img: "/assets/profile-pics/stock-profile-woman.jpeg"
        }
      ],
      messages: [
        {
          user: "Jane Hew",
          text: "Hey! How is it going?",
          profilePic: "/assets/profile-pics/stock-profile-woman.jpeg",
          time: "2 hours ago",
          self: false
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Marketing meeting minutes",
      people: "Tom Jones",
      participants: [
        {
          id: 1,
          name: "Sarah Smith Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Tom Jones",
          profilePic: "/assets/profile-pics/profile2.jpg",
          text: "Hey John",
          time: "4 days ago",
          self: false
        },
        {
          user: "Tom Jones",
          profilePic: "/assets/profile-pics/profile2.jpg",
          text: "Do you have the minutes from the marketing meeting last week?",
          time: "4 days ago",
          self: false
        },
        {
          user: "John Smith",
          profilePic: "/assets/profile-pics/stock-profile.png",
          text: "No I dot have them, I'm sure Mary will know who has them.",
          time: "4 days ago",
          self: true
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "New hires",
      people: "Tommy and Rebecca",
      participants: [
        {
          id: 1,
          name: "Sarah Smith Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Tommy Bowe",
          profilePic: "/assets/profile-pics/profile4.png",
          text: "Hey guys, do we have any updates on the new hire reports?",
          time: "4 days ago",
          self: false
        },
        {
          user: "John Smith",
          profilePic: "/assets/profile-pics/stock-profile.png",
          text: "Yes, Dave sent me the reports to look over before he finalised data",
          time: "4 days ago",
          self: true
        },
        {
          user: "Rebecca Jones",
          profilePic: "/assets/profile-pics/profile8.jpg",
          text: "Great news, thanks for the updates!",
          time: "4 days ago",
          self: false
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "HR Webinar",
      people: "Louis and Rebecca",
      participants: [
        {
          id: 1,
          name: "Sarah Smith Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Louis Rossman",
          profilePic: "/assets/profile-pics/profile5.jpg",
          text: "Are you both signed up for the HR webinar coming up?",
          time: "5 days ago",
          self: false
        },
        {
          user: "John Smith",
          profilePic: "/assets/profile-pics/stock-profile.png",
          text: "I signed up but it might clash with a team meeting.",
          time: "5 days ago",
          self: true
        },
        {
          user: "Rebecca Jones",
          profilePic: "/assets/profile-pics/profile8.jpg",
          text: "Yeah I have registed. I'm looking forward to see the new updates.",
          time: "5 days ago",
          self: false
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Welcome to the team!",
      people: "Dave Sterling",
      participants: [
        {
          id: 1,
          name: "Sarah Smith Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Dave Sterling",
          profilePic: "/assets/profile-pics/profile6.jpg",
          text: "Welcome to the team John",
          time: "5 days ago",
          self: false
        }
      ]
    }
  ];

  currentMessage = null;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  ngOnInit() {
    this.selectConvo(this.convos[0]);
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  constructor(
    private toastr: ToastrService
  ) {}

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  selectConvo(convo) {
    console.log(convo)
    if (this.currentMessage) {
      this.currentMessage.selected = false;
    }
    this.currentMessage = convo;
    this.currentMessage.selected = true;
  }

  closeConvo() {
    this.currentMessage.selected = false;
    this.currentMessage = null;
  }

  postComment(comment, convo) {
    convo.messages.push(
      {
        profilePic: "/assets/profile-pics/stock-profile.png",
        self: true,
        text: comment,
        time: "1 hour ago",
        user: "John Smith"
      }
    );
    this.scrollToBottom();
  }
  
  // likeClick(post) {
  //   const index = this.feedData.indexOf(post);
  //   this.feedData[index].like ? this.feedData[index].like = false : this.feedData[index].like = true;
  // }

  // toggleComments(post) {
  //   const index = this.feedData.indexOf(post);
  //   this.feedData[index].load === "Load" ? this.feedData[index].load = "Close" : this.feedData[index].load = "Load";
  // }

  // postComment(comment, post) {
  //   const index = this.feedData.indexOf(post);
  //   let newComment = {
  //       username: "John Smith",
  //       profilePic: "/assets/profile-pics/stock-profile.png",
  //       comment: comment
  //   }

  //   this.feedData[index].comments.unshift(newComment);
  //   this.toastr.success(
  //     '', `Comment posted successfully!`
  //   );
  // }
}
