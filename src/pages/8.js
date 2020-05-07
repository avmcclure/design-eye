import React from "react"
import ReactPage from "../components/page"
import EarlyLife from "../components/early-life"
import TimelineEntry from "../components/timeline-entry"
import "./8.scss"

import early_life from "../images/early_life.jpg"
import usaf from "../images/usaf.png"
import discharge from "../images/discharge.jpg"
import norris_lewis from "../images/norris_lewis.jpg"
import karate from "../images/karate.jpg"
import the_wrecking_crew from "../images/the_wrecking_crew.jpg"
import dragon from "../images/dragon.jpg"
import teachers from "../images/teachers.jpg"
import tiger from "../images/tiger.jpg"
import winning from "../images/winning.jpg"
import breaker from "../images/breaker.jpg"
import black from "../images/black.jpg"
import force from "../images/force.jpg"
import octagon from "../images/octagon.jpg"
import eye from "../images/eye.jpg"
import rage from "../images/rage.jpg"
import wolf from "../images/wolf.jpg"
import mia from "../images/mia.jpg"
import invasion from "../images/invasion.jpg"

import { Frame, Page } from "framer"
import useKeyNavigation from "../components/useKeyNavigation";

export default function EigthPage() {
  const [currentPage, setCurrentPage] = useKeyNavigation();

  return (
    <ReactPage pageNumber={8} description="Even spicier">
      <Page
        width="100vw"
        height="100vh"
        direction="vertical"
        wheelEnabled
        gap={0}
        onChangePage={current => {
          console.log(current)
          setCurrentPage(current)
        }}
        currentPage={currentPage}
      >
        <Frame size={100}>
          <section className="image-background">
            <div className="overlay">
              <div className="container">
                <h1>Chuck Norris</h1>
                <span>
                  Carlos Ray "Chuck" Norris (born March 10, 1940) is an American
                  martial artist, actor, film producer and screenwriter. After
                  serving in the United States Air Force, Norris won many
                  martial arts championships and later founded his own
                  discipline, Chun Kuk Do. Norris is a black belt in Tang Soo
                  Do, Brazilian jiu jitsu and Judo. Shortly after, in Hollywood,
                  Norris trained celebrities in martial arts. Norris went on to
                  appear in a minor role in the spy film The Wrecking Crew
                  (1969). Friend and fellow actor Bruce Lee invited him to play
                  one of the main villains in Way of the Dragon (1972). While
                  Norris continued acting, friend and student Steve McQueen
                  suggested to him to take it seriously. Norris took the
                  starring role in the action film Breaker! Breaker! (1977)
                  which turned a profit. His second lead Good Guys Wear Black
                  (1978) became a hit, and Norris became a popular action film
                  star.
                </span>
              </div>
            </div>
            <svg
              className="svg-overlay"
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
            >
              <path d="M 0 1000 Q 700 800 6000 900" fill="#f25042"></path>
              <path d="M 0 1000 Q 600 900 1600 1000" fill="#f9f4ef"></path>
            </svg>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="full image">
            <div className="container">
              <EarlyLife />
            </div>
            <img src={early_life} />
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={usaf} date="1958">
              Norris joins the United States Air Force as an Air Policeman (AP)
              in and is sent to Osan Air Base, South Korea. It is there that he
              acquires the nickname Chuck and begins his training in Tang Soo Do
              (tangsudo), an interest that would lead to black belts in that art
              and the founding of the Chun Kuk Do ("Universal Way") form. When
              he returned to the United States, he continued to serve as an AP
              at March Air Force Base in California.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={discharge} date="1962">
              Norris is discharged from the U.S. Air Force in August 1962.
              Following his military service, Norris applied to be a police
              officer in Torrance, California. While on the waiting list, Norris
              opened a martial arts studio. To promote it, Norris did
              demonstrations and fights in all kinds of events. Norris started
              to participate in martial arts competitions. He was defeated in
              his first two tournaments, dropping decisions to Joe Lewis and
              Allen Steen. He lost three matches at the International Karate
              Championships to Tony Tulleners.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={norris_lewis} date="1967">
              Norris defeats eight opponents, including Skipper Mullins to win
              the Tournament of Karate on June 3rd. On June 24th he is declared
              champion at the S. Henry Cho's All-American Karate Championship at
              the Madison Square Garden, taking the title from Julio LaSalle and
              defeating Joe Lewis. During this time, Norris he also works for
              the Northrop Corporation and opens a chain of karate schools,
              including a storefront school in his then-hometown of Torrance, CA
              on Hawthorne Boulevard. Some of his clients include Steve McQueen,
              Chad McQueen, Bob Barker, Priscilla Presley, Donny Osmond and
              Marie Osmond.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={karate} date="1968">
              Norris suffers the tenth and last loss of his career, losing an
              upset decision to Louis Delgado. He would go on to avenge his
              defeat to Delgado, winning the Professional Middleweight Karate
              champion title, which he would hold for six consecutive years. On
              April 1 in a round robin tournament, Norris successfully defends
              his All-American Karate Championship title at the Karate
              tournament of champions of North America against both Hawk D.
              Frazier and Carlos Farrell, winners of the black belt lightweight
              and heavyweight titles, respectively. This would be the last time
              Norris would participate, which would let him retire undefeated in
              this tournament.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={the_wrecking_crew} date="1969">
              Norris makes his acting debut in the Dean Martin film{" "}
              <strong>
                <i>The Wrecking Crew</i>
              </strong>
              . Norris defends his title as world champion at the International
              Karate Championship. The competition includes champions from most
              of the fifty states as well as a half dozen from abroad who joined
              for the preliminaries. Norris wins Karate's triple crown for the
              most tournament wins of the year, and the Fighter of the Year
              award by Black Belt magazine.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={dragon} date="1972">
              Chuck acts as Bruce Lee's nemesis in the widely acclaimed martial
              arts movie{" "}
              <strong>
                <i>Way of the Dragon</i>
              </strong>{" "}
              (titled{" "}
              <strong>
                <i>Return of the Dragon</i>
              </strong>{" "}
              in its U.S. distribution). The film grosses HK$5,307,350.50 at the
              Hong Kong box office, beating previous records set by Lee's own
              films,
              <strong>
                <i>The Big Boss</i>
              </strong>{" "}
              and{" "}
              <strong>
                <i>Fist of Fury</i>
              </strong>
              , making it the highest-grossing film of the year in Hong Kong.
              The film launches him toward stardom.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={teachers} date="1973">
              Jonathan Kaplan's{" "}
              <strong>
                <i>The Student Teachers</i>
              </strong>{" "}
              premieres where Norris has a small role.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={tiger} date="1974">
              Upon the urging of Steve McQueen, his martial arts student and
              friend at the time, Norris begins taking acting classes at MGM.
              Later on in the year, he plays the supporting role of the main
              antagonist in Lo Wei's{" "}
              <strong>
                <i>Yellow Faced Tiger</i>
              </strong>
              , a powerful drug king in San Francisco, where he dominates the
              criminal world including the police department. He is eventually
              challenged by a young police officer who stands up to corruption.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={winning} date="1975">
              He writes his first book{" "}
              <strong>
                <i>Winning Tournament Karate</i>
              </strong>{" "}
              on the practical study of competition training for any rank. It
              covers all phases of executing speedy attacks, conditioning,
              fighting form drills, and one-step sparring techniques.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={breaker} date="1977">
              Norris gets his first starring role in{" "}
              <strong>
                <i>Breaker! Breaker!</i>
              </strong>
              , an action trucking film. After turning down offers to do many
              martial art films, Norris decides that he wants to do films that
              have a story where the action takes place when it is emotionally
              right. The low budget film turns out to be very successful.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={black} date="1978">
              In 1978, Norris stars in the thriller{" "}
              <strong>
                <i>Good Guys Wear Black</i>
              </strong>
              , which he considers to be his first significant lead role. No
              studio wants to release it, so Norris and his producers four-wall
              it, renting the theaters and taking whatever money came in. The
              film does very well; shot on a $1 million budget, it makes over
              $18 million at the box office.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={force} date="1979">
              Norris stars in{" "}
              <strong>
                <i>A Force of One</i>
              </strong>
              , where he plays Matt Logan, a world karate champion who assists
              the police in their investigation. The film is developed while
              touring for Good Guys Wear Black. Again no studio wants to pick it
              up, but it out-grossed the previous film by making $20 million at
              the box office.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={octagon} date="1980">
              <strong>
                <i>The Octagon</i>
              </strong>{" "}
              releases, where his character must stop a group of terrorists
              trained in the ninja style. Unlike his previous films this time
              the studios are interested. American Cinema Releasing distributes
              it and it makes almost $19 million at the box office
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={eye} date="1981">
              He stars in Steve Carver's{" "}
              <strong>
                <i>An Eye for an Eye</i>
              </strong>
              , co-starring Christopher Lee, Richard Roundtree, Matt Clark, and
              Mako Iwamatsu. His earlier shot film, Yellow Face Tigerm is
              theatrically released in the US in 1981 as Slaughter in San
              Francisco. It is noticed that it is an older low-budget film is
              announcing Norris as the lead. The film played as a double-bill to
              other action and genre films. It is often described as a low
              budget martial arts actioner taking advantage of Norris' fame.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={rage} date="1982">
              Norris has the lead in the action horror film{" "}
              <strong>
                <i>Silent Rage</i>
              </strong>
              . It is his first film released by a major studio, Columbia
              Pictures. In the film Norris is a sheriff who must stop a
              psychopath who goes on a rampage after being granted
              near-indestructibility in a medical experiment. Shortly afterwards
              MGM gives him a three-movie deal releases Forced Vengeance. Norris
              is unhappy with the direction they want to take with him, so the
              contract is canceled.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={wolf} date="1983">
              Norris make{" "}
              <strong>
                <i>Lone Wolf McQuade</i>
              </strong>{" "}
              with Orion Pictures. He plays J.J. McQuade, a reckless Texas
              Ranger who'd rather work alone, but gets a new partner because his
              captain would like to have him supervised. The partners
              investigate an arms dealer played by David Carradine. The film is
              a worldwide hit and has a positive reception from movie critics,
              often being compared to Sergio Leone's stylish spaghetti westerns.
              The film would become the inspiration for Norris's future hit TV
              show Walker, Texas Ranger. Film critic Roger Ebert gives the film
              a 3.5 star rating, calling the character of J.J. McQuade worthy of
              a film series and predicting the character would be a future
              classic. Norris publishes his second book, Toughen Up! the Chuck
              Norris Fitness System. Xonox produces the video game Chuck Norris
              Superkicks for the Commodore 65, Commodore VIC-20, Atari 2600 and
              Colecovision.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section className="alt">
            <TimelineEntry align="left" image={mia} date="1984">
              Chuck stars in{" "}
              <strong>
                <i>Missing in Action</i>
              </strong>
              , the first of a series of POW rescue fantasies themed around the
              Vietnam War POW/MIA issue that is produced by Menahem Golan and
              Yoram Globus and released under their Cannon Films banner, with
              which he signs a multiple movie deal. He plays Colonel James
              Braddock, a US military officer who spent seven years in a North
              Vietnamese POW camp, which he escaped 10 years ago. After the war,
              Braddock accompanies a government investigation team that travels
              to Ho Chi Minh City to investigate reports of US soldiers still
              held prisoner. Norris would later dedicate these films to his
              younger brother Wieland, who was a private in the 101st Airborne
              Division and had been killed in June 1970 in Vietnam while on
              patrol in the defense of Firebase Ripcord. The film is a huge
              success and Norris would become Cannon's most prominent star of
              the 1980s.
            </TimelineEntry>
          </section>
        </Frame>
        <Frame size={100}>
          <section>
            <TimelineEntry align="right" image={invasion} date="1985">
              In 1985, Cannon Films releases{" "}
              <strong>
                <i>Missing in Action 2: The Beginning</i>
              </strong>{" "}
              and
              <strong>
                <i>Invasion U.S.A.</i>
              </strong>{" "}
              which are extremely successful.{" "}
              <strong>
                <i>Missing in Action 2: The Beginning</i>
              </strong>{" "}
              is a prequel to the first installment, where Colonel James
              Braddock is held in a North Vietnamese POW camp run by sadistic
              Colonel, who forces the POWs to grow opium for a French drug
              runner and tries to get Braddock to admit to and sign a long list
              of war crimes. During his team's time in captivity, they are
              relentlessly subjected to various forms of torture. This leads
              them to attempt escape, and Braddock plots to free his fellow
              prisoners and destroy the prison camp.
            </TimelineEntry>
          </section>
        </Frame>
      </Page>
    </ReactPage>
  )
}
