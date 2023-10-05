import React,{useState} from 'react'

function Specifications() {
    const [readmore,setReadmore]=useState(false);
    const b={
        display: readmore ? "block" : "none"
    }
    const c={
        display: readmore ? "none" : "block"
    }
  return (
    <div>
        <div>
            <div className='s1'>
                <h1>Specifications</h1>
            </div>
            <div className='s2'>
                <h3>General</h3>
                <table>
                    <tr>
                        <th>In The Box</th>
                        <td>Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Screen Protect Film, Case</td>
                    </tr>
                    <tr>
                        <th>Model Number</th>
                        <td>RMX3710</td>
                    </tr>
                    <tr>
                        <th>Model Name</th>
                        <td>C55</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td>Sunshower</td>
                    </tr>
                    <tr>
                        <th>Browse Type</th>
                        <td>Smartphones</td>
                    </tr>
                    <tr>
                        <th>SIM Type</th>
                        <td>Dual Sim</td>
                    </tr>
                    <tr>
                        <th>Hybrid Sim Slot</th>
                        <td>No</td>
                    </tr>
                    <tr>
                        <th>Touchscreen</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>OTG Compatible</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Quick Charging</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>SAR Value</th>
                        <td>Head:0.99 W/kg, Body: 1.23 W/kg</td>
                    </tr>
                    
                </table>
            </div>
            <div className='readmore' style={c} >
                <p onClick={()=>setReadmore(true)}>Read more</p>
            </div>
            <div style={b}>
            <div className='s2'>
                <h3>Display Features</h3>
                <table>
                    <tr>
                        <th>Display Size</th>
                        <td>17.07 cm (6.72 inch)</td>
                    </tr>
                    <tr>
                        <th>Resolution</th>
                        <td>2400 x 1080 Pixels</td>
                    </tr>
                    <tr>
                        <th>Resolution Type</th>
                        <td>Full HD+</td>
                    </tr>
                    <tr>
                        <th>GPU</th>
                        <td>Mali-G52</td>
                    </tr>
                    <tr>
                        <th>Display Type</th>
                        <td>Full HD+ LCD Display</td>
                    </tr>
                    <tr>
                        <th>Display Colors</th>
                        <td>16.7 Million</td>
                    </tr>
                    <tr>
                        <th>Other Display Features</th>
                        <td>Refresh Rate: 90 Hz, Aspect Ratio: 20:9, Screen-to-Body Ratio: 91.40%, 180 Hz Touch Sampling Rate, Screen Contrast: 1500:1, Brightness: 550 nit, Color Saturation: 96% NTSC, Sunlight Screen Support</td>
                    </tr>
                    
                </table>
            </div>

            <div className='s2'>
                <h3>Os & Processor Features</h3>
                <table>
                    <tr>
                        <th>Operating System</th>
                        <td>Android 13</td>
                    </tr>
                    <tr>
                        <th>Processor Type</th>
                        <td>Helio G88</td>
                    </tr>
                    <tr>
                        <th>Processor Core</th>
                        <td>Octa Core</td>
                    </tr>
                    <tr>
                        <th>Primary Clock Speed</th>
                        <td>2 GHz</td>
                    </tr>
                    <tr>
                        <th>Secondary Clock Speed</th>
                        <td>1.8 GHz</td>
                    </tr>
                    <tr>
                        <th>Operating Frequency</th>
                        <td>2G GSM: 850/900/1800/1900 MHz, 3G WCDMA: B1/B5/B8, 4G FDD LTE: B1/B3/B5/B8, 4G TD LTE: B38/B40/B41 (2535 MHz - 2655 MHz)</td>
                    </tr>
                    
                </table>
            </div>

            <div className='s2'>
                <h3>Memory & Storage Features</h3>
                <table>
                    <tr>
                        <th>Internal Storage</th>
                        <td>128 GB</td>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <td>8 GB</td>
                    </tr>
                    <tr>
                        <th>Expandable Storage</th>
                        <td>1 TB</td>
                    </tr>
                    <tr>
                        <th>Supported Memory Card Type</th>
                        <td>MicroSD</td>
                    </tr>
                    <tr>
                        <th>Memory Card Slot Type</th>
                        <td>Dedicated Slot</td>
                    </tr>
                    
                </table>
            </div>

            <div className='s2'>
                <h3>Camera Features</h3>
                <table>
                    <tr>
                        <th>Primary Camera Available</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Primary Camera</th>
                        <td>64MP + 2MP</td>
                    </tr>
                    <tr>
                        <th>Primary Camera Features</th>
                        <td>Dual Camera Setup: 64MP Primary Camera (Omnivision OV64B40, f/1.79 Aperture, FOV: 80.7 Degree, Focal Length: 25.6mm, 6P Lens, 1/2 inch Sensor Size, 1.4um Pixel Size, PDAF) + 2MP Portrait Camera (GalaxyCore GC02M1B, f/2.4 Aperture, FOV: 88.8 Degree, Focal Length: 21.88mm, 3P Lens, 1/5 inch Sensor Size, 1.75um Pixel Size, Fixed Focus), CMOS, 20 Continuous Shooting, Camera Feature: Photo, AI Beauty, Filter, AI Scene Recognition, Night Mode, Professional, Panoramic View, Portrait Mode, Street, HDR, 64MP Mode, Starry, Chroma Boost, Bokeh Flare Portrait, AI Color Portrait, Video Feature: Video, Video Filter, Slow Motion, Timelapse</td>
                    </tr>
                    <tr>
                        <th>Secondary Camera Available</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Secondary Camera</th>
                        <td>8MP Front Camera</td>
                    </tr>
                    <tr>
                        <th>Secondary Camera Features</th>
                        <td>8MP Front Camera Setup: (SmartSens SC800CS, f/2.0 Aperture, FOV: 78.1 Degree, 1/4 inch Sensor Size, 1.12um Pixel SIze, 5P Lens, CMOS, Fixed Focus), Camera Feature: Photo, Beauty, Filter, Night Mode, Panoramic View, Portrait Mode, HDR, AI Scene Recognition</td>
                    </tr>
                    <tr>
                        <th>Flash</th>
                        <td>Rear: Single Flash | Front: Screen Flash</td>
                    </tr>
                    <tr>
                        <th>HD Recording</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Full HD Recording</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Video Recording</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Video Recording Resolution</th>
                        <td>Rear Camera: 720p (at 30 fps/60 fps/ 120 fps), 1080p (at 30 fps/60 fps) | Front Camera: 720p (at 30 fps), 1080p (at 30 fps)</td>
                    </tr>
                    <tr>
                        <th>Digital Zoom</th>
                        <td>10X</td>
                    </tr>
                    <tr>
                        <th>Frame Rate</th>
                        <td>120 fps, 60 fps, 30 fp</td>
                    </tr>
                    <tr>
                        <th>Dual Camera Lens</th>
                        <td>Primary Camera</td>
                    </tr>
                </table>
            </div>

            <div className='s2'>
                <h3>Call Features</h3>
                <table>
                    <tr>
                        <th>Speaker Phone</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Call Records</th>
                        <td>Yes</td>
                    </tr>
                </table>
            </div>

            <div className='s2'>
                <h3>Connectivity Features</h3>
                <table>
                    <tr>
                        <th>Network Type</th>
                        <td>2G, 3G, 4G</td>
                    </tr>
                    <tr>
                        <th>Supported Networks</th>
                        <td>4G LTE, GSM, WCDMA</td>
                    </tr>
                    <tr>
                        <th>4G LTE, GSM, WCDMA</th>
                        <td>4G, 3G, EDGE, GPRS, Wi-Fi</td>
                    </tr>
                    <tr>
                        <th>3G</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>GPRS</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Bluetooth Support</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Bluetooth Version</th>
                        <td>v5.2</td>
                    </tr>
                    <tr>
                        <th>Wi-Fi</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Wi-Fi Version</th>
                        <td>Wi-Fi 5 (a/b/g/n/ac) (2.4 GHz | 5 GHz)</td>
                    </tr>
                    <tr>
                        <th>Wi-Fi Hotspot</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>NFC</th>
                        <td>No</td>
                    </tr>
                    <tr>
                        <th>Infrared</th>
                        <td>No</td>
                    </tr>
                    <tr>
                        <th>USB Connectivity</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>EDGE</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Audio Jack</th>
                        <td>3.5mm</td>
                    </tr>
                    <tr>
                        <th>GPS Support</th>
                        <td>Yes</td>
                    </tr>
                    
                </table>
            </div>

            <div className='s2'>
                <h3>Other Details</h3>
                <table>
                    <tr>
                        <th>Smartphone</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Touchscreen Type</th>
                        <td>Capacitive</td>
                    </tr>
                    <tr>
                        <th>SIM Size</th>
                        <td>Nano Sim</td>
                    </tr>
                    <tr>
                        <th>User Interface</th>
                        <td>Realme UI 4.0 (Based on Android 13)</td>
                    </tr>
                    <tr>
                        <th>SMS</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Keypad</th>
                        <td>No</td>
                    </tr>
                    <tr>
                        <th>Graphics PPI</th>
                        <td>391 PPI</td>
                    </tr>
                    <tr>
                        <th>Sensors</th>
                        <td>Magnetic Induction Sensor, Light Sensor, Proximity Sensor, Gyrometer (Software Gyroscope), Acceleration Sensor</td>
                    </tr>
                    <tr>
                        <th>Ringtones Format</th>
                        <td>OGG</td>
                    </tr>
                    <tr>
                        <th>Other Features</th>
                        <td>COG Sealing Process, In-Cell Touch Panel Technology, 10 Touch Points, Oleophobic Coating, Lens Glass Type: CG21, Dual RAM Channel, RAM Frequency: 1800 MHz, ROM Type: EMMC 5.1, Single ROM Channel, External Memory Support Type: FAT, NTFS, FAT32, exFAT, 33W SuperVOOC, Reverse Charging, 1 x 1 Wi-Fi Antenna Technology, RF Antenna Technology: 4 x 2 MIMO, Bluetooth Audio Codec: SBC, AAC, APTX, APTX HD, LDACAPTX_TWS+, Phone Locked Functions: Face Unlock, Fingerprint Unlock, Password Unlock, Pattern Unlock, Google Smart Lock, Side Fingerprint, Wet Fingerprint Unlock, Face Unlock Technology, File Encryption, Private Space, Private Apps, Private Protection, 1 Microphone, Mono Mic Nosie Cancellation, Glove Mode, Vibrating Motor Type: Rotor Motor, 1 Speaker, Sound Effect Type: Dirac, MT6358 Audio Decoding Chip, Supports L1 WideVine, Supports Web Video Play, Press to Answer Calls, Headphone Monitor, Kids Space, Voice Wake Up, Night Shilled, Step Tracker, Game Space, App Market, Theme Store, Clone Prone, Phone Manager, Google Lens, Data Backup, File Compression and Decompression, World Time, Import and Export Contacts</td>
                    </tr>
                    <tr>
                        <th>GPS Type</th>
                        <td>GPS, AGPS, BEIDOU, GLONASS, GALILEO</td>
                    </tr>
                    
                </table>
            </div>

            <div className='s2'>
                <h3>Multimedia Features</h3>
                <table>
                    <tr>
                        <th>Audio Formats</th>
                        <td>AAC, APE, FLAC, AMR, MID, MP3, OGG, WAV, WMA, MKA</td>
                    </tr>
                    <tr>
                        <th>Video Formats</th>
                        <td>MP4/3GP/ASF/AVI/FLV/M2TS/MKV/MPG/TS/WEBM/WMV</td>
                    </tr>
                    
                </table>
            </div>

            <div className='s2'>
                <h3>Battery & Power Features</h3>
                <table>
                    <tr>
                        <th>Battery Capacity</th>
                        <td>5000 mAh</td>
                    </tr>
                </table>
            </div>

            <div className='s2'>
                <h3>Dimensions</h3>
                <table>
                    <tr>
                        <th>Width</th>
                        <td>75.98 mm</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>165.65 mm</td>
                    </tr>
                    <tr>
                        <th>Depth</th>
                        <td>7.89 mm</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>189.5 g</td>
                    </tr>
                    
                </table>
            </div>

            <div className='s2'>
                <h3>Warranty</h3>
                <table>
                    <tr>
                        <th>Warranty Summary</th>
                        <td>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories</td>
                    </tr>
                    <tr>
                        <th>Domestic Warranty</th>
                        <td>1 Year</td>
                    </tr>
                    
                </table>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Specifications