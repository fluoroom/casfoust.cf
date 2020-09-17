import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Youtube from '../components/YoutubeEmbed'
import Seo from '../components/Seo'

const Title = styled.h2`
    font-size: 2em;
    margin-bottom: 0.5em;
`

const Patches = () => {
  return (
    <Layout>
        <Seo title="microKORG Patches" />
        <style jsx>{`
            ul{
                text-align:left;
                margin: 0 auto;
                display: inline-block;
                margin-bottom: 1.5em;
            }
            ul li{
                list-style: square inside;
            }
            h3{
                font-size:1.2em;
                line-height:2em;
            }
        `}</style>
        <article>
        <Title>Casfoust's microKORG patches!</Title>
        <p>I've owned my microKORG for 4 years now and produced a lot of all&#x2011;original patches, of which i've chosen the best ones and have put them in this awesome patch bank.</p>
        <Youtube videoId="HDdGfK8BiQ0" maxWidth="640"/>
        <h3>Compatibility:</h3>
        <ul>
            <li>microKORG (classic)</li>
            <li>microKORG S</li>
            <li>KORG MS-2000 (and variants)</li>
        </ul>
        <p><b>NOT COMPATIBLE WITH microKORG XL and XL+</b></p>
        <h3>Available in:</h3>
        <ul>
            <li><b>.PRG</b> files (microKORG Sound Editor for Windows)</li>
            <li><b>.TXT</b> human-readable parameter recipes.</li>
        </ul>
        <p><b>Get all the 67 patches for only $9!<br/>Actually the best price per patch on the market!</b></p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="P5928S4ATK99S"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>

        </article>
    </Layout>
  )
}

export default Patches
