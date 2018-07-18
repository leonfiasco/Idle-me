import React from 'react';

import Navbar from './../Navbar3';
import Footer from './../Footer';


class Blog1 extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box-1">
                  <div className="p-2 bd-highlight">
                    <div id="dot-1A">
                     <div className="cross">
                     <div className="line1"></div>
                     <div className="line2"></div>
                   </div>
                   </div>
                   <p className="name-txt">Jade Innes<br></br>
                   17.October 2017
                   </p>
                 </div>
                 <div className="share-box">
                   <p className="share">SHARE</p>
                   <i id="icons1 text-muted m-2 fa fa-twitter"></i>
                   <i id="icons1 text-muted m-2 fa fa-facebook"></i>
                   <i id="icons1 text-muted m-2 fa fa-envelope"></i>
                 </div>
               </div>
            </div>
            <div className="col">
              <div className="box-2">
                 <div className="p-2 bd-highlight d-flex justify-content-center">
             <h1>Working with Swiss Standard German text<br></br>
               as a British designer
             </h1>

           </div>
           </div>
         </div>
            </div>
            <div className="behance d-flex justify-content-center">
            <img  alt="blog-placeholder" src="https://uc16d8ffc87452479db7ed309552.previews.dropboxusercontent.com/p/thumb/AAKrUKkM4ymZB3mTvOPhKVGBh4PPnU74QekLwDFTY3zdAv088FlDqwtoxXwYxkpYoBVaSUiV0XKXpWca6JL67rjU98GgM-aWDoo6PItoyv1724SzpoyModVBd3iQjYHxfPyr8rwatr2YYZB1yjHhCO_0oYN3GEyOEpIcvZh9M8oWdVHQDUXeBDhzS7esObOZU9db5Cfy2KffwIclSxtdwR0mo18PzzzdtBWbDNL__Eo7Cw/p.png?size=1280x960&size_mode=3"></img>
          </div>

          </div>
          <div className="blog-text d-flex justify-content-center">
          <p>
            My time at on-IDLE so far has not only taught me a lot about working in a
            studio, but also a fair amount about Switzerland and Swiss culture. For instance,
            I can now name three Swiss cantons and I have succeeded in retaining eye
            contact while clinking a glass, without causing a glass related hand injury.
            <br></br>
            <br></br>
            Following the British stereotype, my modern language skills are very limited
            (however, very limited in three!). A lot of projects at on-IDLE have presented
            me with the challenge of working with a lot of Swiss Standard German text, in
            particular in Migros projects. Although daunting to begin with, there are indeed
            advantages to this. One is that spotting double spaces and checking the
            dashes is a lot easier, as you are not worrying about spotting typos, or getting
            distracted by what the text is saying. Secondly, I have found myself beginning
            to develop a slight understanding of the written language, with a particular
            notice to punctuation, which is something my Duolingo app hasn’t shown me!
            This post shall be a summary of what I have worked out so far.
          </p>

        </div>
        <div className="behance d-flex justify-content-center">
        <img  alt="blog-placeholder" src="https://ucfd6b49c1af9e145d252dfa21b9.previews.dropboxusercontent.com/p/thumb/AAIgsYnzXHPkcBc60DtCwnhXG6sGbuwL-fApuIWIl_2-0QuHl8rXZJoP7NqBc1TirHtrRnWn98jxmfee8jrWlpeYkjVWC3XXNdLoGyAGbVZ7zPVK2fNQeweLOjFkSJVu1xzt4xlnX1Os-5m1BvHoiCsBb1YcAVPH6CLlYKszhx6tDcAqsPQ6jGlmtbvoK4Wz0niHFpiZ3O7kgSOAdIvMv7i-_euy9eNM_2CCvW9iW3HCsA/p.png?size=1280x960&size_mode=3"></img>
      </div>
      <div className="blog-text d-flex justify-content-center">
      <p>
        <h6>Dashes</h6>
        <br></br>
        What came to me quite quickly is that if you are working with Swiss Standard
        German, you are probably going to be also working with hyphenated text. My
        guess is that it is due to the length of a lot of the words in the language, in order
        to avoid horrendous rags, especially in multiple columned layouts.
        <br></br>
        <br></br>
        If you have read past posts on the on-IDLE blog, you would be aware of Marc’s
        rants about em and en dashes, but there is a rule not found in English grammar,
        which permits time in the limelight for the hyphen, when paired with a few
        certain words. The case I have most commonly witnessed is ‘- und’. There are
        other instances that I spotted in the Aare Magazin for Migros, which include ‘-
        oder’ ‘- bis’ and ‘- als’. So, it seems that conjunction words are permitted the use
        of a hyphen.
        <br></br>
        <br></br>
        An example of this can be:
        <div className="vl2">
          <p> «Sie stiften Orientierung im Einkaufs- und
            Informations- dschungel.»</p>
        </div>
      </p>

      </div>
      <hr className="blog-line"></hr>
      <div className="behance d-flex justify-content-center">
      <img  alt="blog-placeholder" src="https://uc551ba566c25f31fc7b14d73e78.previews.dropboxusercontent.com/p/thumb/AALVIVokKFVZpD7rXCYXgSXbxLpRZYjA2tfhJ-izpigQadiVmU0LeAhFKhgddmD2nmxy4ziQicZ8Ppcyrkb2Bk01LBi7gAxPPVGr_B_1vJKkeR2ftQHn9cadMcO-k3_iLN27kwlEv8M0rifELosnS7bJB1M02b33WYq5i4uz-QzyMBS1fxri5Q7oMjEmxDcZ8lkiR3MqPLIwTnBNdIYKknLSUbBgtZND_YT4v3GiAoSTSg/p.png?size=1280x960&size_mode=3"></img>
    </div>
    <div className="blog-text d-flex justify-content-center">
    <p>
      <h6>Quotation Marks</h6>
      <br></br>
      ‘Guillemets’ (« ») can often be found in Swiss Standard German text, as a
      replacement for the English quotation marks. Although Guillemets are used in
      many languages, they are often referred to as ‘French quotation marks’, so it
      was probably something that hopped over the border. Upon discussing this
      with Sabina, I discovered that this typographic mark is mostly used within print.
      There is an alternative used for handwritten text, are called Gänsefüsschen („“),
      which cutely translates as ‘Geese Tootsies’.
      <br></br>
      <br></br>
      The use of Guillemets however, is considered superior by some designers, as it
      creates less blank space in comparison to quotation marks. As well as this, they
      provide a greater distinction from commas, apostrophes etc.
      <br></br>
      <br></br>
      <br></br>
    </p>
    </div>
    <hr className="blog-line"></hr>
    <div className="behance d-flex justify-content-center">
    <img  alt="blog-placeholder" src="https://uc07830d7bdbf1d07e010fa2b0f2.previews.dropboxusercontent.com/p/thumb/AAIYevjsB2IMe5xztPHRq21lKl2kbIAHCxyjqVJWMk7d1-hkiISo3VMFML9lXnG87VGYZOeREj_DyCWLOG7lEC-F54J9ZwwGNCtgSxi29eUjfozB2KB-qyqnxE2SmO4WYDm-Pk3fTbFlWjWhglQ2nypQG4Yak6QHp9QN2CDlvdX3XlnP5ghsSRvdCCc51_lDVzNsKlvurWzrEaVpwDfRbBHjML60p4pzhbvOronGeinf7Q/p.png?size=1280x960&size_mode=3"></img>
  </div>
  <div className="blog-text d-flex justify-content-center">
  <p>
    <h6>Numbers</h6>
    <br></br>
    The rule in English language when writing numbers consisting of more than
    three digits a comma is used to separate every third number from the right (i.e.
    1,489). Swiss Standard German also uses a thousand separator in most cases,
    but an apostrophe (’) is used instead. Of course, there is a correct apostrophe –
    a closing single quote mark and it has to be the curly one. Most certainly can it
    not be a straight quote (which came from the use of typewriters) or a prime (the
    unit used for inches and feet).
    <br></br>
    <br></br>
    <br></br>
  </p>
  </div>
  <hr className="blog-line"></hr>
  <div className="behance d-flex justify-content-center">
  <img  alt="blog-placeholder" src="https://uc4cff95dfa6994912f401a0ba9d.previews.dropboxusercontent.com/p/thumb/AAL_2K5s4Tc6gNS8HBLgckuwSbqPbflw9sPmfL_kYTKqxoW5tiABKVJFpK92J0HRxqJMH0TSo-gegdo0qr61Nql3HjDHXahtO7YI_RpDHgZyaf1qHp5ODfZ0snM93PPHPRlNLAjXLFslmZC26_LAKCuD0XnFFBKutphrEqg88YFXJLzLgU_geN4lxKB1gGyXVa2h52xxhAGyj6EQlpe4jNWBm0BCaWglm7SUQSfEY6tMQg/p.png?size=1280x960&size_mode=3"></img>
</div>
<div className="blog-text d-flex justify-content-center">
<p>
  <h6>Dates</h6>
  <br></br>
“Great mission, which is prominently featured (What
We Do) - Rich, nested/layered content, yet well
organized and easy to navigate - I like how the user
can control the top rotating primary images / case
studies (rather than them rotating before I’m done
reading them) - I don’t know if possible, but consider
a future version where the events feel like you’re
still on the same site (currently spawning a new
window introduces complexity for users / window/
tab management...) - Being able to see the students
express themselves (videos) is very compelling,
nicely done...”
  <br></br>
  <br></br>
  <br></br>
</p>
</div>
<hr className="blog-line"></hr>
<div className="behance d-flex justify-content-center">
<img  alt="blog-placeholder" src="https://ucddf27bc37046dd379221d2d3b8.previews.dropboxusercontent.com/p/thumb/AAIe7icdhgLOMHyAxzP5OLJ75p7FSx_Yn7dAa8EFosNu4Vqas06aKPliLcOHXv8LonXMn7iu8BAbe1pNOS3Z6N6IDWH8S49bUuwflWgdjBwzoa0ys9gZc1TFqr0FKbZViblSJV5FHGlaJr59GdWv64n9b6v5fkVQQDen2ToWxs0VfwL4Cney1VF3oRmn8ogeG8CvutxpeMtSQ6PAF8XGw1-d9xe3vnrJoMd8wVwsU5UizA/p.png?size=1280x960&size_mode=3"></img>
</div>
<div className="blog-text d-flex justify-content-center">
<p>
  <h6>Eszett(ß)</h6>
  <br></br>
  A big difference between the written language in Germany and Switzerland is
  the lack of the ‘scharfes S’ (or ‘Eszett’) which translates in English to ‘Sharp S’.
  The Eszett in German comes in several variations, which can be interchanged
  according to typographic preference, in order to control the space around the
  letterform. It originally did not come in a capitalised form, as it was never used
  at the beginning of a word. However, as of 2017, it is officially represented as ẞ.
  <br></br>
  <br></br>
  It is thought that there are several possible reasons why the Swiss rejected
  the Eszett. One is in connection to the objection to Nazi Germany, in order to
  distinguish itself from the country. However, it may have been simply due to the
  confusing rules attached to the letterform. Whatever it was, the dismissal of the
  letterform was aided by the struggles with the Swiss keyboard, as a lot of space
  had been used to accommodate the glyphs for the French speaking cantons.
  The letter was last used in Switzerland by a newspaper in 1974 after years of
  gradual decline, and is now represented by ‘ss’.
  <br></br>
  <br></br>
  If you wish to acquire obscure and overly geeky historic knowledge of
  typographic marks and punctuation, I highly recommend the book ‘Shady
  Characters: The Secret Life of Punctuation, Symbols & Other Typographic
  Marks’ by Keith Houston. The cover also feels pretty nice.
  <br></br>
  <br></br>
  <br></br>
</p>
</div>
<hr className="blog-line"></hr>
 <p className="line-tag"><strong>tags:</strong>Jade Innes, Rules, Swiss, Language, typography, Design, Grammar, Culture, Hyphen, Apostrophe, Eszett,<br></br>Typographic Marks, Glyphs, tips, Type
 <br></br>
 <br></br>
 <br></br>
<strong>jade innes</strong> | 17.October 2017
</p>
        <Footer />
      </main>
    )
  }
}













export default Blog1;
