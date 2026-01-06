import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';


export async function getPosition() {

  const platform = Capacitor.getPlatform();
  const device = await Device.getInfo().catch(() => null);

  const pos = await Geolocation.getCurrentPosition({
    enableHighAccuracy: true,
    maximumAge: 0,
  });
  /*console.log(pos)*/

  return {
      ok: true,
      source: 'capacitor',
      platform,
      coords: pos.coords,
      accuracy: pos.coords?.accuracy ?? null,
      timestamp: pos.timestamp ?? Date.now(),
      device,
    };
}
