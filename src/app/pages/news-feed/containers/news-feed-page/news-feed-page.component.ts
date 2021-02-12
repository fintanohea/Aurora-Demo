import { Component } from '@angular/core';

@Component({
  selector: 'app-news-feed-page',
  templateUrl: './news-feed-page.component.html',
  styleUrls: ['./news-feed-page.component.scss']
})
export class NewsFeedPageComponent {
  feedData = [
    {
      username: "Tom Jones",
      type: "Has a new highlight",
      profilePic: "/assets/profile-pics/profile2.jpg",
      img: "https://picsum.photos/id/1/600",
      title: "This Is the Future Of Remote Work In 2021",
      articleLink: "https://www.forbes.com/sites/carolinecastrillon/2021/12/27/this-is-the-future-of-remote-work-in-2021/?sh=660bc58a1e1d",
      content: "<p>The world witnessed a historic shift in the 2020 job market due to the Covid-19 pandemic.</p><p>While some companies used to offer the ability to work from home as a perk, it has now become the norm for most businesses.</p><p> By 2025, an estimated 70% of the workforce will be working remotely at least five days a month. While 2020 may be considered the year of remote work, it is just the beginning as we see the trend continuing in 2021.</p>",
      like: true
    },
    {
      username: "Sarah Smith",
      type: "Shared a post",
      profilePic: "/assets/profile-pics/profile1.jpg",
      img: "https://picsum.photos/id/378/600",
      title: "How a strong employer brand can decrease your time-to-hire and improve quality-of-hire",
      articleLink: "https://www.linkedin.com/pulse/how-strong-employer-brand-can-decrease-your-improve-alan-stanton/?trackingId=qWZ3rz6tF%2FAoICpQy0%2FZcw%3D%3D",
      content: "<p>As Talent Acquisition Leader for the largest imaging company in the world, Chris brings a wealth of experience and knowledge to this week's edition of the Wiser Words series. Having spent the last 20 years working in recruitment and talent acquisition, he is well-positioned to educate and inform us on topics in this space. </p><p>In this interview, he delves into the ongoing debate around time-to-hire and explains why and how a strong employer brand can decrease your cost per hire, save time and ensure that talent joins the business for the long haul.</p>",
      like: false
    },
    {
      username: "Mary Quinn",
      type: "Shared a post",
      profilePic: "/assets/profile-pics/profile3.jpg",
      img: "https://picsum.photos/id/317/600",
      title: "How to use the holidays to revive corporate culture",
      articleLink: "https://www.bizjournals.com/bizjournals/how-to/human-resources/2020/12/how-to-use-holidays-to-revive-corporate-culture.html",
      content: "<p>The 2020 holiday season is rapidly approaching, and it will be like none other in recent history.</p><p>The global coronavirus pandemic has left an indelible mark on how we live our lives and how companies operate. Businesses have worked incredibly hard to keep moving forward, focusing on immediate needs, creating work-from-home structures and retrofitting workspaces for increased safety. As all of those efforts unfolded, one likely casualty was company culture.</p>",
      like: false
    }
  ];

  trending = [
    {
      title: "The Six Morning Habits of High Performers",
      text: "Six practices to get back on track",
      link: "https://picsum.photos/id/317/600"
    },
    {
      title: "Speaking Confidently and Effectively",
      text: "Great speaking skills are a must-have",
      link: "https://picsum.photos/id/317/600"
    },
    {
      title: "Unconscious Bias",
      text: "Stacey Gordon",
      link: "https://picsum.photos/id/317/600"
    },
    {
      title: "Microservices: Design Patterns",
      text: "Solving microservices problems with patterns",
      link: "https://picsum.photos/id/317/600"
    }
  ]


  
  likeClick(post) {
    const index = this.feedData.indexOf(post);
    this.feedData[index].like ? this.feedData[index].like = false : this.feedData[index].like = true;
  }
}
