import { serve } from "https://deno.land/std@0.220.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Real scaler parameters from your trained StandardScaler
const scalerParams = {
  mean: [18.27413671599718, 80.72797744890768, 88.82593375616631],
  scale: [11.98343820753327, 6.528141460932991, 7.785623332913725]
}

// Real model parameters from your trained model
const modelWeights = {
  intercept: [-0.38818286, -0.24206599, -0.30204128, -0.19884045, 0.0598233, 0.01812606,
    -0.28430328, 0.12772147, 0.04605522, 0.10134539, -0.25232415, 0.02343251,
    -0.04193656, -0.37063507, 0.13017532, -0.06624784, 0.19270906, 0.02023753,
    -0.12964496, 0.21428474, 0.19237133, 0.1499131, -0.1541739, -0.02690487,
    -0.06123613, 0.06976132, 0.11381001, 0.2140775, 0.47583307, -0.08118574,
    0.08268317, -0.08104933, -0.15145506, -0.07247492, 0.18558324, 0.12086654,
    0.24229789, -0.05275167, 0.11379288, 0.22063045, -0.15807703],
  coefficients: [
    [-0.3511889671797265, -0.14869288157888874, 0.04591429717216304],
    [-0.06571579648156572, -0.23886800177271275, -0.16573105501620897],
    [-0.18202233620921024, -0.12412897294342184, -0.09363177177448695],
    [-0.33677407765320366, -0.17250371608572476, 0.10717117978873494],
    [-0.01203458988947877, -0.14774766802054184, 0.13377230942076154],
    [-0.1911259185081457, 0.011507279104783125, 0.19324474397026853],
    [-0.32913993602316105, -0.26894929507967236, 0.32670465281108796],
    [-0.010865431173163803, -0.08343718557634316, -0.07364906823911166],
    [-0.07410342555260517, -0.08018749176710215, -0.19630769289164607],
    [0.009900880271804451, -0.11126355861714672, 0.01248604319792557],
    [-0.22860320166506892, -0.1901964046731828, 0.22662695185358062],
    [0.1218489335579323, 0.2117599300313304, -0.06742446384536542],
    [0.0503200319270241, -0.23679933603205203, -0.08530208639240741],
    [-0.3274406609254138, -0.3615820928900504, 0.13232500594810886],
    [0.008759749773618937, -0.09818814059468536, -0.00944423290667807],
    [-0.09989108701874543, -0.0918427996235429, 0.3229260189780133],
    [-0.15254852085415344, -0.19873919794219233, 0.012720773035635206],
    [6.436043291398094e-05, 0.09294662311584793, -0.03246836391386057],
    [0.0051169950310374955, -0.15354275739095424, 0.31352513138121363],
    [0.15558131848277781, -0.32070169192102277, -0.04827307471267497],
    [-0.15026432691980168, 0.18763732814325026, 0.08859407092125807],
    [-0.12539039343519567, -0.029606859496228793, -0.02347660193678615],
    [0.09572095355110342, -0.15302998967326806, -0.025038354055357044],
    [-0.042615439964990356, -0.14362955859372578, -0.03676647887938302],
    [-0.06417748678289219, -0.2849821843227424, 0.050904724053692035],
    [-0.09977968716446681, 0.6691924919052703, -0.3957213551369041],
    [0.13877902667056183, 0.13200153850405855, 0.04843516983938843],
    [0.009897259714362462, 0.2555219816504199, -0.0327599054866353],
    [0.15912896905302795, 0.1316965614458303, -0.058888167519411116],
    [0.06119994783659679, 0.21590064534717, -0.25936087711892475],
    [0.04755945817652253, 0.22423771719333327, 0.04297062473078142],
    [0.27144082721753066, 0.015431499345601955, 0.08628239020297014],
    [0.08641678759071213, 0.4515063997508727, -0.2647333550148423],
    [0.24230916571139705, 0.20454728674121472, 0.4577707991817858],
    [0.058103526960526855, 0.33126139726583953, -0.16983795847557182],
    [0.49473107807705985, -0.0729304798285386, -0.07579074331604366],
    [0.4329781854197021, 0.02126982171575531, -0.25103063227470385],
    [-0.03400505766036213, 0.15051023157125776, 0.07728936885199758],
    [0.03511110635218195, 0.23470912300900185, -0.08351005323736803],
    [-0.13480710518163766, 0.1641058747120563, -0.11227722039361407],
    [0.5275248844345954, 0.005806533870846051, -0.11824074280138336]
  ]
}

function standardScale(value: number, mean: number, scale: number): number {
  return (value - mean) / scale
}

function predictScore(hoursStudied: number, previousScore: number, attendance: number): number {
  // Scale the input features using your trained scaler
  const scaledFeatures = [
    standardScale(hoursStudied, scalerParams.mean[0], scalerParams.scale[0]),
    standardScale(previousScore, scalerParams.mean[1], scalerParams.scale[1]),
    standardScale(attendance, scalerParams.mean[2], scalerParams.scale[2])
  ]
  
  // Calculate decision scores for each class
  const decisionScores = modelWeights.intercept.map((intercept, classIndex) => {
    let score = intercept
    for (let featureIndex = 0; featureIndex < scaledFeatures.length; featureIndex++) {
      score += scaledFeatures[featureIndex] * modelWeights.coefficients[classIndex][featureIndex]
    }
    return score
  })
  
  // Find the class with the highest decision score
  const predictedClassIndex = decisionScores.indexOf(Math.max(...decisionScores))
  
  // Convert class index to score (assuming your classes represent score ranges or categories)
  // You may need to adjust this mapping based on how your model was trained
  const predictedScore = predictedClassIndex * (100 / 40) // Maps 0-40 classes to 0-100 range
  
  // Ensure the prediction is within valid range (0-100)
  return Math.max(0, Math.min(100, predictedScore))
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { hoursStudied, previousScore, attendance } = await req.json()

    // Validate input
    if (hoursStudied === undefined || previousScore === undefined || attendance === undefined) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: hoursStudied, previousScore, attendance' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Convert to numbers and validate
    const hours = Number(hoursStudied)
    const prevScore = Number(previousScore)
    const attend = Number(attendance)

    if (isNaN(hours) || isNaN(prevScore) || isNaN(attend)) {
      return new Response(
        JSON.stringify({ error: 'All inputs must be valid numbers' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Validate ranges (adjust these based on your training data ranges)
    if (hours < 0 || hours > 50) {
      return new Response(
        JSON.stringify({ error: 'Hours studied must be between 0 and 50' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (prevScore < 0 || prevScore > 100) {
      return new Response(
        JSON.stringify({ error: 'Previous score must be between 0 and 100' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (attend < 0 || attend > 100) {
      return new Response(
        JSON.stringify({ error: 'Attendance must be between 0 and 100' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Make prediction using your trained model
    const predictedScore = predictScore(hours, prevScore, attend)

    console.log(`Real model prediction: hours=${hours}, prevScore=${prevScore}, attendance=${attend} -> score=${predictedScore}`)

    return new Response(
      JSON.stringify({ 
        predictedScore: Math.round(predictedScore * 100) / 100, // Round to 2 decimal places
        success: true 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Prediction error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
