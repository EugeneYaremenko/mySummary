import React from 'react';
import styles from './info.module.css';

import FaceImage from '../FaceImage/FaceImage';
import InfoTitile from '../InfoTitle/InfoTitle';
import Contacts from '../Contacts/Contacts';
import Skills from '../Skills/Skills';

// variables.js
import { techSkills, softSkills } from '../../helpers/variables/variables';
import { myPhoto, myName, myContacts } from '../../helpers/variables/variables';

const Info = () => {
  return (
    <section className={styles.info}>
      <FaceImage src={myPhoto} alt={myName} />

      <div className={styles.infoContent}>
        <InfoTitile title={'Contacts'} />
        <Contacts contacts={myContacts} />

        <InfoTitile title={'Tech Skills'} />
        <Skills skills={techSkills} />

        <InfoTitile title={'Soft Skills'} />
        <Skills skills={softSkills} />
      </div>
    </section>
  );
};

export default Info;
