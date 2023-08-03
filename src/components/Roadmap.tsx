import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './Roadmap.module.scss'; // import the styles
import shake from "../images/shake/shakepixel.png"
import useMediaQuery from '@mui/material/useMediaQuery';


const roadmapData = [
  { phase: 1, title: 'Conceptualization', description: 'We’ve launched our Twitter Page, set up our Telegram, built our landing page, and started to build our community. Next up, we’re launching our mint and NFT Holder-Only Tools. We’re also listing ourselves on CoinGecko and CMC. We’ll also releae tutorials on how to utilize the Astrologer’s various dashboard functionalities.' },
  { phase: 2, title: 'New Features', description: 'We’ll hire more team members for community mgmt, dev work, launch some advanced dashboard features, and conduct user testing with the community. We’ll also implement volume generation on DEX, renounce contract, and launch an AI-driven crypto influencer trust score.' },
  { phase: 3, title: 'Community Development', description: 'We’ll hire more team members for community mgmt, dev work, launch some advanced dashboard features, and conduct user testing with the community. We’ll also implement volume generation on DEX, renounce contract, and launch an AI-driven crypto influencer trust score.' },
  { phase: 4, title: 'Project Reinvestment', description: 'We’ll launch a Quarterly PnL that reflects onchain activity, utilize treasury profits to buy back and burn tokens on the open market, implement additional exchanges on dashboard, and release crowd-funding mechanism for DAO investment.'},
  { phase: 5, title: 'blah', description: 'We’ll launch a Quarterly PnL that reflects onchain activity, utilize treasury profits to buy back and burn tokens on the open market, implement additional exchanges on dashboard, and release crowd-funding mechanism for DAO investment.'},
  { phase: 6, title: 'blah', description: 'We’ll launch a Quarterly PnL that reflects onchain activity, utilize treasury profits to buy back and burn tokens on the open market, implement additional exchanges on dashboard, and release crowd-funding mechanism for DAO investment.'},
  
];

export default function Roadmap() {
    return (
      <div className={styles.roadmap}>
        {roadmapData.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.phase}>
              <Card className={styles.card}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Phase {item.phase}: {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            {index !== roadmapData.length - 1 && <img className={styles.betweenCardImage} src={shake} alt="handshake" />}
          </React.Fragment>
        ))}
      </div>
    );
}
