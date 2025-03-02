import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '@mantine/carousel';
import { Button, Paper, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLanguage } from '@/hooks/useLanguage';
import { QuestionsData } from '@/schema';
import classes from './Carousel.module.css';

interface CarouselProps {
  data: QuestionsData[];
}

export const CarouselComponent = (props: CarouselProps) => {
  const { data } = props;
  const mobile = useMediaQuery(`(max-width: 540px`);
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const navigate = useNavigate();

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 2, sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {data.map((item) => {
        const cardTitle = item.title[currentLanguage] ?? item.title.pl;
        return (
          <Carousel.Slide key={item.id} className={classes.slide}>
            <Paper
              shadow="sm"
              radius="sm"
              p="sm"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className={classes.card}
            >
              <div>
                <Title order={3} className={classes.title}>
                  {cardTitle}
                </Title>
              </div>
              <Button onClick={() => navigate(`/overview/${item.id}`)}>{t('button select')}</Button>
            </Paper>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};
