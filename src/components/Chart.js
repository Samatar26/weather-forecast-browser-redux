import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default props => {
  return (
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
      <div className="units">{average(props.data)} {props.unit}</div>
    </Sparklines>
  );
};
