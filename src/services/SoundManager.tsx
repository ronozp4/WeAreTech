import Sound from 'react-native-sound';

// Enable playback in silence mode (iOS only)
Sound.setCategory('Playback');

const soundMap: Record<string, Sound> = {};


// Load new sound
export function loadSound(audioUrl: string, soundKey: string) {
  if (soundKey in soundMap) {
    return
  }
  soundMap[soundKey] = new Sound(audioUrl, '', (error) => {
    if (error) {
      console.log(`Failed to load sound "${soundKey}"`, error);
    }
  });
}

// Play sound
export function playSound(soundKey: string) {
  const sound = soundMap[soundKey];
  if (sound) {
    // if(sound.isPlaying()){ // optional: allow interrupt
    //   sound.pause()
    // }
    sound.play((success) => {
      if (!success) {
        console.log(`Sound "${soundKey}" playback failed`);
      }
    });
  } else {
    console.log(`Sound "${soundKey}" is not loaded yet. Call loadSound("${soundKey}") first.`);
  }
}
