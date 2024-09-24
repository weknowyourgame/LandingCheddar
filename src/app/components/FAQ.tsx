/* eslint-disable */

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./FaqHelper"
  
  export function FAQ() {
    return (
      <Accordion type="single" collapsible className="w-full">

        <AccordionItem value="item-1">
          <AccordionTrigger>What exactly is CheddarBot?</AccordionTrigger>
          <AccordionContent>
          CheddarBot is a Telegram-based platform that allows you to trade any token on Solana at the best available prices. 
            It’s the fastest and most convenient way to trade, and puts crypto’s most powerful trading infrastructure right into the palm of your hand.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I use this bot?</AccordionTrigger>
          <AccordionContent>
            You can start using CheddarBot by simply messaging the bot on Telegram.
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-3">
          <AccordionTrigger>Do you have a Guide to use the Bot?</AccordionTrigger>
          <AccordionContent>
            Yes. You can find the guide <a href="https://docs.cheddarbot.com">here</a>.
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-4">
          <AccordionTrigger>How can I earn using CheddarBot?</AccordionTrigger>
          <AccordionContent>
            You can earn by trading tokens on the platform learn more at <a href="https://docs.cheddarbot.com">here</a>.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Are there any Docs?</AccordionTrigger>
          <AccordionContent>
            Yes. You can find the documentation <a href="https://docs.cheddarbot.com">here</a>.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What are the fees for using this Bot?</AccordionTrigger>
          <AccordionContent>
            CheddarBot charges a 0.3% fee on all trades.
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-7">
          <AccordionTrigger>I need help!</AccordionTrigger>
          <AccordionContent>
            You can reach out to us at support@cheddarBot.com
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-8">
          <AccordionTrigger>Where can i know more?</AccordionTrigger>
          <AccordionContent>
            You can find more information at <a href="https://docs.cheddarbot.com">here</a>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  