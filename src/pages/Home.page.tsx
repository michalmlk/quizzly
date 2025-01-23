import { useState } from 'react';
import { Button } from '@mantine/core';
import { ConfigurationForm } from '@/components/ConfigurationForm/ConfigurationForm';
import { Slide } from '@/components/Slide/Slide';
import { Welcome } from '@/components/Welcome/Welcome';
import classes from './Home.page.module.css';

type SectionNames = 'firstPage' | 'baseConfiguartionForm' | 'test2';

export function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Record<SectionNames, boolean>>({
    firstPage: true,
    baseConfiguartionForm: false,
    test2: false,
  });

  const toggleVisibleSection = (name: SectionNames) => {
    const keys = Object.keys(visibleSections);
    const nextKey =
      keys.indexOf(name) + 1 === keys.length ? keys.indexOf(name) : keys.indexOf(name) + 1;
    setVisibleSections((prev) => ({
      ...prev,
      [name]: !prev[name],
      [keys[nextKey]]: true,
    }));
  };

  return (
    <div className={classes.container}>
      <Slide isVisible={visibleSections.firstPage}>
        <Welcome />
        <Button onClick={() => toggleVisibleSection('firstPage')}>home</Button>
      </Slide>
      <Slide isVisible={visibleSections.baseConfiguartionForm}>
        <ConfigurationForm onFinish={() => toggleVisibleSection('baseConfiguartionForm')} />
      </Slide>
      <Slide isVisible={visibleSections.test2}>
        <h1>tes2</h1>
        <Button onClick={() => toggleVisibleSection('test2')}>home</Button>
      </Slide>
    </div>
  );
}
