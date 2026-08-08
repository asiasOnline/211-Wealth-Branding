import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import DropDownSection from '@/components/DropDownSection'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";
import { PiHeart, PiHandsPraying, PiShieldCheckered  } from "react-icons/pi";

const FoundationGuidelines = () => {
  const valueCards = [
    {name: "Community", 
      icon: <HiOutlineUserGroup className='w-7 h-7'/>,
      content: "211 Wealth is an organization derived from a desire to give back to the community. As the world becomes more globalized it can feel as though we’ve lost connection with our own neighbors, but it’s through a focus on community that 211 Wealth focuses on fostering a sense of support and social responsibility."},
    {name: "Family", 
      icon: <PiHeart className='w-7 h-7'/>,
      content: "It’s important that organizations that seek to serve others in crisis understand that people typically don’t face hardships alone. Struggle can impact an entire family, and 211 Wealth seeks to acknowledge those connections and the complex situations that can arise."},
    {name: "Grace", 
      icon: <PiHandsPraying className='w-7 h-7'/>,
      content: "The value of grace is a powerful differentiating characteristic among the non-profit sector. In an industry where those who should be served are made to face constant judgement, barriers to aid, and dehumanization, valuing grace allows 211 Wealth to connect others no matter their situation."},
    {name: "Stewardship", 
      icon: <PiShieldCheckered className='w-7 h-7'/>,
      content: "As an up and coming organization, stewardship is a crucial value to establishing trust amongst those who donate valuable resources to 211 Wealth. This value is important for not only sustainability but for showcasing a commitment to responsibility and transparency."},
  ]

  return (
    <div>
      <h1>The Foundation</h1>
      <div id='values'>
        <h2>Values</h2>
        <p className='pt-4'>Clear values are crucial to understanding what guides others.  This is true for not only individuals, but  for brands as well, and it’s especially important for non-profit organizations like 211 Wealth that must maintain a high level of trust and goodwill with the public to successfully run their operations.</p>
        <div className='flex flex-col justify-center lg:flex-row gap-6 py-4 lg:flex-wrap'>
          {valueCards.map((card) => {

            return (
              <div key={card.name} className='bg-white p-6 border border-brand-grey-600 rounded-lg lg:w-1/3'>
                <div className='flex justify-center gap-4 pb-4'>
                    {card.icon}
                    <p className='font-bold text-lg'>{card.name}</p>
                </div>
                <p>{card.content}</p>
              </div>
            )
          })}
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='personality'>
        <h2>Personality</h2>
        <p className='py-4'>While it may seem a bit redundant to again relate branding to individuals, it’s essential to reinforce the human traits behind an organization, and this is especially true for  non-profits. While values help shape your organization’s motivations and subsequent behavior, it’s the personality that stems from those values that helps an organization differentiate itself from the crowd.</p>
        
        <div className='flex justify-center'>
          <div>
            <p className='py-4'>The personality traits that embody 211 Wealth include:</p>
            <div className='flex pl-16 gap-16'>
              <div>
                <ul className='list-disc'>
                  <li>Compassionate</li>
                  <li>Supportive</li>
                  <li>Encouraging</li>
                </ul>
              </div>
              <div>
                <ul className='list-disc'>
                  <li>Reliable</li>
                  <li>Nurturing</li>
                  <li>Warm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='voice'>
        <h2>Voice</h2>
        <p className='py-4'>Distilling personality down even further we create a definitive voice for 211 Wealth which helps to define a clear and consistent perspective and vocabulary for all messaging.</p>
        <div className='flex flex-col gap-8'>
          <DropDownSection heading='1. We’re allies, not saviors.'>
          <p>This guideline reflects a foundational belief that the people we serve are not broken or damaged.</p>
          <p>211 Wealth serves capable individuals who are navigating through extraordinarily difficult circumstances, and we strive to use language that centers our clients' resilience and agency.</p>
          <p>This means...</p>
          <ul className='flex flex-col gap-4 list-disc ml-8'>
            <li>
              <p>Centering the client, rather than the organization, as the driving force behind their transformation.</p>
              <p>211 Wealth is the supporting role, not the hero of the story.</p>
            </li>
            <li>
              <p>Avoiding language that could be interpreted as pitying, and instead opting for vocabulary that showcases strength and resilience.</p>
              <p>Rather than ‘victims of circumstance’ we help ‘those navigating a crisis.’</p>
            </li>
            <li>
              <p>Using collaborative language whenever possible.</p>
              <p>This means using ‘with’ language instead of ‘for’ language to reinforce 211 Wealth’s position as an ally.</p>
            </li>
          </ul>
        </DropDownSection>
        <DropDownSection heading='2. We’re patient, and we don’t over promise.'>
          <p>This guideline reflects the founders’ lived experience and an understanding that growth happens in stages with setbacks and moments of doubt along the way.</p>
          <p>211 Wealth differentiates itself through honest communication that seeks to provide hope, but not at the expense of integrity. </p>
          <p>This means...</p>
          <ul className='flex flex-col gap-4 list-disc ml-8'>
            <li>
              <p>Using language that’s accurate rather than aspirational.</p>
              <p>Instead of ‘transform your life’ consider ‘progress will look different for everyone.’ </p>
            </li>
            <li>
              <p>Balancing hope with humility.</p>
              <p>When sharing stories it’s important to acknowledge the reality of setbacks, works in progress, and consistency.</p>
            </li>
            <li>
              <p>Avoiding urgency tactics, such as scarcity language or emotional manipulation.</p>
              <p>Urgency should only be used when it is factually true, not as a rhetorical device. </p>
            </li>
          </ul>
        </DropDownSection>
        <DropDownSection heading='3. We’re professional, but we do not pretend.'>
          <p>This guideline asks that the credibility of an knowledgeable and structured organization, is balanced with the authenticity of the founders.</p>
          <p>This means...</p>
          <ul className='flex flex-col gap-4 list-disc ml-8'>
            <li>
              <p>Staying true to the organization’s origin story. </p>
              <p>The founders’ backgrounds in social work, child development, and their personal experiences with hardship is core to the identity of 211 Wealth. Lived experiences should be utilized alongside professional credentials to define the brand’s authority. </p>
            </li>
            <li>
              <p>Maintaining a human voice, even in formal situations.</p>
              <p>Across all materials, 211 Wealth’s voice should remain clear, direct, and warm rather than bureaucratic and stiff. </p>
            </li>
            <li>
              <p>Acknowledging hard truths.</p>
              <p>When discussing challenges, complex issues, and limitations, it’s important to speak honestly and candidly. 211 Wealth’s credibility should be defined by demonstrating thoughtfulness rather than projecting perfection. </p>
            </li>
          </ul>
        </DropDownSection>
        <DropDownSection heading='4. We seek to encourage, and never exploit.'>
          <p>This guideline acknowledges that there will always be an active decision made to honor the dignity of the individuals we engage with during the creation of all material. </p>
          <p>211 Wealth seeks to encourage others through the use of factual data, honest storytelling, and sincere imagery without being  exploitative and utilizing pain and tragedy to elicit emotional responses. </p>
          <p>This means...</p>
          <ul className='flex flex-col gap-4 list-disc ml-8'>
            <li>
              <p>Involving real people before publishing any client-facing content.</p>
              <p>211 Wealth is committed to having honest conversations with human representatives to accurately gauge content. The goal is to prioritize narratives that show resilience and agency alongside an honest acknowledgement of hardship. </p>
            </li>
            <li>
              <p>Obtaining meaningful consent and honoring it.</p>
              <p>When utilizing someone else’s story, this means more than just having them sign a release form, it means providing context to how it will be used, where it will appear, and what it will be used for. It also means being transparent when gathering testimonials so the individuals involved can make an informed decision on how much or little they want to share.</p>
            </li>
            <li>
              <p>Relying on factual data to carry the emotional weight.</p>
              <p>Rather than depending on an individual's trauma to convey scale or urgency, 211 Wealth should utilize county-level statistics and program outcome data. Reserve personal stories to illustrate hope and resilience, rather than to showcase suffering.</p>
            </li>
          </ul>
        </DropDownSection>
        <DropDownSection heading='5. We seek to collaborate, not compete.'>
          <p>This guideline is an acknowledgement that the challenges that face San Bernardino County can only be addressed by a multitude of organizations seeking to serve the public. </p>
          <p>211 Wealth is entering the non-profit sector not as a rival to other organizations, but as an addition to a large ecosystem that functions best when cooperation is prioritized.</p>
          <p>This means...</p>
          <ul className='flex flex-col gap-4 list-disc ml-8'>
            <li>
              <p>Referencing other non-profit organizations with generosity and respect. </p>
              <p>211 Wealth seeks to use language that recognizes the broader network they belong to and avoid framing that positions them as a solution while diminishing what others offer. </p>
            </li>
            <li>
              <p>Actively inviting partnership.</p>
              <p>Any material made for referral partners and community organization, should feel akin to an open door rather than a sales pitch. This means emphasizing 211 Wealth’s responsiveness and openness to feedback.</p>
            </li>
            <li>
              <p>Be transparent about scope and redirect when needed. </p>
              <p>When 211 Wealth cannot serve someone, whether it’s due to capacity or eligibility, copy and communication should always strive for a warm handoff to another qualified organization, rather than a cold, dead end.  It’s important that people understand their values as human beings, rather than a metric. </p>
            </li>
          </ul>
        </DropDownSection>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='audience'>
          <h2>Audience</h2>
          <p className='pt-4'>211 Wealth serves a network of three interconnected audiences, with each playing a distinct role in the organization’s ability to fulfill its mission. Below are the three defined audience segments complete with personas to help associate each group with a human being that the organization will often engage with. Grounding the brand’s messaging and decision making to the people these personas represent will help to make informed and intentional decisions.</p>
          <Tabs>
            <TabsList className='gap-4'>
              <TabsTrigger value="primaryBeneficiaries">
                Primary Beneficiaries
              </TabsTrigger>
              <TabsTrigger value="individualDonors">
                Individual Donors
              </TabsTrigger>
              <TabsTrigger value="communityOrganizers">
                Community Organizers
              </TabsTrigger>
            </TabsList>
            <TabsContent value="primaryBeneficiaries">
              <p className='mb-4'>Represented by Maria, this segment embodies the women and families that 211 Wealth seeks to directly serve. The age range of this group primarily lies between 25 to 45, and they’re often navigating a variety of interconnected challenges such as housing instability, domestic violence, unemployment, and food insecurity. As such, they need support provided with dignity rather than judgement and an emphasis on communication that’s clear, accessible, and warm.</p>
              <Button variant='outline'>
                <Link href="/personas/211-Wealth-User-Persona-Recipient-Segment.pdf"
                className='flex gap-2'
                >
                  Download Persona
                  <FiDownload />
                </Link>
              </Button>
              <Image 
                src="/personas/211-Wealth-User-Persona-Recipient-Segment.png"
                alt='211 Wealth User Persona - Recipent'
                width={1920}
                height={1080}
                className='border border-brand-black rounded-lg mt-4'
              />
            </TabsContent>
            <TabsContent value="individualDonors">
              <p className='mb-4'>Represented by Patricia, this segment embodies the individuals motivated to support 211 Wealth and the causes they serve. The age range of this group primarily lies between 45 to 65. They’re typically middle to upper-middle class professionals, business owners, or retirees. Individuals apart of this group become ambassadors, volunteers, and board members providing access to connect other resources helping to build the brand's recognition and a supportive community.</p>
              <Button variant='outline'>
                <Link href="/personas/211-Wealth-User-Persona-Doner-Segment.pdf"
                className='flex gap-2'
                >
                  Download Persona
                  <FiDownload />
                </Link>
              </Button>
              <Image 
                  src="/personas/211-Wealth-User-Persona-Doner-Segment.png"
                  alt='211 Wealth User Persona - Recipent'
                  width={1920}
                  height={1080}
                  className='border border-brand-black rounded-lg mt-4'
                />
            </TabsContent>
            <TabsContent value="communityOrganizers">
              <p className='mb-4'>Represented by Carmen, this segment embodies the community professionals such as the social workers, case managers, counselors, educators, etc. The age of this group has the widest range lying between 25 to 65 and working in a variety of sectors including healthcare, faith communities, law enforcement, etc. Referral partners and community organizers within this segment help identify the individuals who need 211 Wealth's services and act as the connecting force vouching for the organization's credibility and helping clients through the access process. </p>
              <Button variant='outline'>
                <Link href="/personas/211-Wealth-User-Persona-Social-Worker-Segment.pdf"
                className='flex gap-2'
                >
                  Download Persona
                  <FiDownload />
                </Link>
              </Button>
              <Image 
                src="/personas/211-Wealth-User-Persona-Social-Worker-Segment.png"
                alt='211 Wealth User Persona - Recipent'
                width={1920}
                height={1080}
                className='border border-brand-black rounded-lg mt-4'
              />
            </TabsContent>
          </Tabs>
      </div>
    </div>
  )
}

export default FoundationGuidelines