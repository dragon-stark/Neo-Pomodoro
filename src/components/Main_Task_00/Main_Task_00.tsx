import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group16Icon } from './Group16Icon';
import classes from './Main_Task_00.module.css';
// import { Mute21Icon } from './Mute21Icon';
import { Silent1Icon } from './Silent1Icon';
import { VectorIcon } from './VectorIcon';
import { YearlyIcon } from './YearlyIcon';

interface Props {
  className?: string;
}
/* @figmaId 5:2 */
export const Main_Task_00: FC<Props> = memo(function Main_Task_00(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.pomodoro}>
        <div className={classes.textBlock}>Pomodoro</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.group14}>
        <div className={classes.rectangle14}></div>
        <div className={classes.silent1}>
          <Silent1Icon className={classes.icon} />
        </div>
        <div className={classes.line9}></div>
      </div>
      <div className={classes.group16}>
        <Group16Icon className={classes.icon2} />
      </div>
      <div className={classes.group13}>
        <div className={classes.rectangle20}></div>
        <div className={classes.rectangle21}></div>
        <div className={classes.minutes}>
          <div className={classes.textBlock3}>minutes</div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
        </div>
        <div className={classes._19}>
          <div className={classes.textBlock5}>19</div>
          <div className={classes.textBlock6}>
            <p></p>
          </div>
        </div>
        <div className={classes.yearly}>
          <YearlyIcon className={classes.icon3} />
        </div>
      </div>
      <div className={classes.work}>Work</div>
      <div className={classes.dots}>
        <div className={classes.rectangle35}></div>
        <div className={classes.rectangle37}></div>
        <div className={classes.rectangle36}></div>
      </div>
      <div className={classes.group12}>
        <div className={classes.rectangle142}></div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon4} />
        </div>
      </div>
    </div>
  );
});
