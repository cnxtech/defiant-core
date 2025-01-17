/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import {
  Grid,
  HeaderGrid,
  ButtonGroup,
  Box,
  Content,
  HeaderBox,
  Title,
  SubTitle,
  Text,
  PrivateImage,
  DuckDuckGoImage,
  TorLockImage,
  Separator,
  FakeButton,
  Link
} from 'dissenter-ui/features/newTab/private'

// Helpers
import { getLocale } from '../../../common/locale'

// Assets
const privateWindowImg = require('../../../img/newtab/private-window-tor.svg')

export default class TorTab extends React.PureComponent<{}, {}> {
  render () {
    return (
      <Grid>
        <HeaderBox>
          <HeaderGrid>
            <PrivateImage src={privateWindowImg} />
            <div>
              <SubTitle>{getLocale('headerLabel')}</SubTitle>
              <Title>{getLocale('headerTorTitle')}</Title>
              <Text>{getLocale('headerTorText')}</Text>
            </div>
          </HeaderGrid>
        </HeaderBox>
        <Box style={{ minHeight: '471px' }}>
          <Content>
            <DuckDuckGoImage />
            <SubTitle>{getLocale('boxDdgLabel')}</SubTitle>
            <Title>{getLocale('boxDdgTitle')}</Title>
            <Text>{getLocale('boxDdgText2')}</Text>
          </Content>
          <Separator />
          <ButtonGroup>
            <Link
              href='https://support.brave.com/hc/en-us/articles/360018266171'
              target='_blank'
            >
              {getLocale('learnMore')}
            </Link>
          </ButtonGroup>
        </Box>
        <Box>
          <Content>
            <TorLockImage />
            <SubTitle>{getLocale('boxTorLabel2')}</SubTitle>
            <Title>{getLocale('boxTorTitle')}</Title>
            <Text>{getLocale('boxTorText')}</Text>
          </Content>
          <Separator />
          <FakeButton
            href='https://support.brave.com/hc/en-us/articles/360018121491'
            target='_blank'
          >
            {getLocale('boxTorButton')}
          </FakeButton>
        </Box>
      </Grid>
    )
  }
}
