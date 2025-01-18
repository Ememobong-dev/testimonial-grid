import daniel from "../../public/images/image-daniel.jpg";
import jeanette from "../../public/images/image-jeanette.jpg";
import jonathan from "../../public/images/image-jonathan.jpg";
import kira from "../../public/images/image-kira.jpg";
import patrick from "../../public/images/image-patrick.jpg";
import { Col, Row } from "antd";
import Card from "@/components/Card";

const testimonial = [
  {
    name: "Daniel Clifford",
    status: "Verified Graduate",
    highlight:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth. ",
    testimonial:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    image: daniel,
    bgColor: "bg-moderateViolet",
  },

  {
    name: "Jonathan Walters",
    status: "Verified Graduate",
    highlight: "The team was very supportive and kept me motivated ",
    testimonial:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ",
    image: jonathan,
    bgColor: "bg-veryDarkGrayishBlue",
  },

  {
    name: "Jeanette Harmo",
    status: "Verified Graduate",
    highlight: " An overall wonderful and rewarding experience",
    testimonial:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    image: jeanette,
    bgColor: "bg-white",
  },

  {
    name: "Patrick Abrams ",
    status: "Verified Graduate",
    highlight:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    testimonial:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ",
    image: patrick,
    bgColor: "bg-veryDarkBlackishBlue ",
  },

  {
    name: "Kira Whittle",
    status: "Verified Graduate",
    highlight: "Such a life-changing experience. Highly recommended!",
    testimonial:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    image: kira,
    bgColor: "bg-white",
  },
];

export default function Home() {
  return (
    <div>
      <Row justify={"center"} >
        <Col xs={20}>
          <Row justify={"center"} gutter={24} >
            <Col xs={18} >
              <Row gutter={[16, 16]} justify={"center"} >
                <Col xs={24} lg={16}>
                  <Card
                    bgColor={testimonial[0].bgColor}
                    review={testimonial[0].testimonial}
                    reviewerHighlight={testimonial[0].highlight}
                    reviewerImg={testimonial[0].image}
                    reviewerName={testimonial[0].name}
                    reviewerStatus={testimonial[0].status}
                    quoteIcon = {true}
                  />
                </Col>
                <Col xs={24} lg={8}>
                  <Card
                    bgColor={testimonial[1].bgColor}
                    review={testimonial[1].testimonial}
                    reviewerHighlight={testimonial[1].highlight}
                    reviewerImg={testimonial[1].image}
                    reviewerName={testimonial[1].name}
                    reviewerStatus={testimonial[1].status}
                  />
                </Col>
              </Row>
              <Row gutter={[16, 16]} justify={"center"} className="mt-8">
                <Col xs={24} lg={8}>
                  <Card
                    bgColor={testimonial[2].bgColor}
                    review={testimonial[2].testimonial}
                    reviewerHighlight={testimonial[2].highlight}
                    reviewerImg={testimonial[2].image}
                    reviewerName={testimonial[2].name}
                    reviewerStatus={testimonial[2].status}
                  />
                </Col>
                <Col xs={24} lg={16 }>
                  <Card
                    bgColor={testimonial[3].bgColor}
                    review={testimonial[3].testimonial}
                    reviewerHighlight={testimonial[3].highlight}
                    reviewerImg={testimonial[3].image}
                    reviewerName={testimonial[3].name}
                    reviewerStatus={testimonial[3].status}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={6} >
              <Card
                bgColor={testimonial[4].bgColor}
                review={testimonial[4].testimonial}
                reviewerHighlight={testimonial[4].highlight}
                reviewerImg={testimonial[4].image}
                reviewerName={testimonial[4].name}
                reviewerStatus={testimonial[4].status}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
