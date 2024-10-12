import React from 'react';
import WaterFallCard, {RecyclerNFT} from '../WaterFallCard';
import Icons, {RecyclerIcons} from '../Icons';

function RowRenderer(type, data) {
  if (type === 'CARD') {
    return <WaterFallCard row={data} />;
  } else if (type === 'ICONS') {
    return <Icons row={data} />;
  }
  return null;
}

export default RowRenderer;
