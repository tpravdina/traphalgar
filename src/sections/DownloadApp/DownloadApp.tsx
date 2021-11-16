import React from 'react';
import { IllustrationBlock } from '../../components/IllustrationBlock';
import './DownloadApp.scss';

export const DownloadApp: React.FC = () => (
  <div className="DownloadApp" id="DownloadApp">
    <IllustrationBlock
      title="Download our mobile apps"
      text="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
      button={{ text: 'Download', modifier: 'outlined', icon: 'download-arrow' }}
      img="img/illustrations/download-our-mobile-apps.svg"
      imgSide="right"
    />
  </div>
);
