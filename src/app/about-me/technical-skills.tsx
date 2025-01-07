import {ChangeEvent, useMemo, useState} from 'react';
import config from '@/app/config';
import styles from './technical-skills.module.scss';

export default function TechnicalSkills() {
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filteredSkills = useMemo(() => {
    return config.skills.filter(item => {
      const someTags = selectedTags.length === 0 ? true : selectedTags.some(selectedTag => item.tags.includes(selectedTag));

      return item.name.includes(inputValue) && someTags
    });
  }, [inputValue, selectedTags]);

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();
    config.skills.map(item => item.tags).flat().forEach(item => (
        uniqueTags.add(item)
    ));
    return Array.from(uniqueTags);
  }, []);

  const handleInputChance = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleSelectTag = (tag: string) => {
    return () => {
      if(!selectedTags.includes(tag)) {
        setSelectedTags(prevState => [...prevState, tag]);
      } else {
        setSelectedTags(prevState => prevState.filter(item => item !== tag))
      }
    };
  };


  return (
      <div className={styles.technical__skills}>
        <input type="text" value={inputValue} onChange={handleInputChance} placeholder=" 🔍  Find a skill ..."
               className={styles.technical__skills__input}/>
        <h4>Tags:</h4>
        <div className={styles.technical__skills__categories}>
          {tags.map((item, index) => (<div key={index}
                                           className={`${styles.technical__skills__categories__category} ${selectedTags.includes(item) ? styles.technical__skills__categories__category__selected : ""}`}
                                           onClick={handleSelectTag(item)}>{item}</div>))}
        </div>
        <h4>Skills ({filteredSkills.length}):</h4>
        <div className={styles.technical__skills__skills__grid}>
          {
            config.skills.map((item, index) => (
                <div key={index}
                     className={`${styles.technical__skills__skills__grid__cell} ${!filteredSkills.find(filteredItem => filteredItem.name === item.name) ? styles.technical__skills__skills__grid__cell__hidden : ""}`}>
                  {item.name}
                </div>
            ))
          }
        </div>
      </div>
  );
}