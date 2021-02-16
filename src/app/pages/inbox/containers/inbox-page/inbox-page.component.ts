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
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          profilePic: "/assets/profile-pics/profile1.jpg",
          text: "this is the message from me",
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
          user: "John Wick",
          profilePic: "/assets/profile-pics/profile2.jpg",
          text: "Yeah thats a great idea, lets do that",
          time: "1 hour ago",
          self: false
        },
        {
          user: "Mark Ward",
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
          user: "Mary",
          profilePic: "/assets/profile-pics/profile1.jpg",
          text: "Awesome!",
          time: "1 hour ago",
          self: false
        },
        {
          user: "John Wick",
          profilePic: "/assets/profile-pics/profile2.jpg",
          text: "See you there",
          time: "1 hour ago",
          self: false
        },
        {
          user: "John Smith",
          profilePic: "/assets/profile-pics/stock-profile.png",
          text: "sounds good",
          time: "1 hour ago",
          self: true
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    },
    {
      id: 1,
      selected: false,
      title: "Fridays event ideas?",
      people: "Mary, Frank and 2 others",
      participants: [
        {
          id: 1,
          name: "Mary Blank",
          img: ""
        }
      ],
      messages: [
        {
          user: "Mary",
          text: "this is the message from me",
          time: "1 hour ago"
        }
      ]
    }
  ];

  currentMessage = null;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  ngOnInit() {
    // this.currentMessage = this.convos[0];
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
