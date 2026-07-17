/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {Analytics} from '@vercel/analytics/react';

// Default implementation, that you can customize
export default function Root({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
