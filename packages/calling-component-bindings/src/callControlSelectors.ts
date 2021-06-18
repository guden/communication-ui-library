// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as reselect from 'reselect';
import { getCall, getDeviceManager } from './baseSelectors';

export const microphoneButtonSelector = reselect.createSelector([getCall, getDeviceManager], (call, deviceManager) => {
  const permission = deviceManager.deviceAccess ? deviceManager.deviceAccess.audio : true;
  return {
    disabled: !call || !permission,
    checked: call ? !call.isMuted : false
  };
});

export const cameraButtonSelector = reselect.createSelector([getCall, getDeviceManager], (call, deviceManager) => {
  // TODO: we should take in a LocalVideoStream that developer wants to use as their 'Preview' view. We should also
  // handle cases where 'Preview' view is in progress and not necessary completed.
  const previewOn = deviceManager.unparentedViews.length > 0 && deviceManager.unparentedViews[0].view !== undefined;
  const localVideoFromCall = call?.localVideoStreams.find((stream) => stream.mediaStreamType === 'Video');
  const permission = deviceManager.deviceAccess ? deviceManager.deviceAccess.video : true;

  return {
    disabled: !deviceManager.selectedCamera || !permission,
    checked: call ? !!localVideoFromCall : previewOn
  };
});

export const screenShareButtonSelector = reselect.createSelector([getCall], (call) => {
  return {
    checked: call?.isScreenSharingOn
  };
});

export const optionsButtonSelector = reselect.createSelector([getDeviceManager, getCall], (deviceManager) => {
  return {
    microphones: deviceManager.microphones,
    speakers: deviceManager.speakers,
    cameras: deviceManager.cameras,
    selectedMicrophone: deviceManager.selectedMicrophone,
    selectedSpeaker: deviceManager.selectedSpeaker,
    selectedCamera: deviceManager.selectedCamera
  };
});