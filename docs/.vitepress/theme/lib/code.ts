// https://www.shadertoy.com/view/WfsyRN
export default `float hash11(float p)
{
  p = fract(p * .1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float sdSegment(in vec2 p, in vec2 a, in vec2 b)
{
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float columns(vec2 uv, float zoom) {
  uv *= zoom;

  vec2 cv = vec2(fract(uv.x) - .5, uv.y);

  float m = 0.;
  for (int i = -1; i < 2; ++i) {
    float fi = float(i);
    float cid = floor(uv.x) + fi;

    float height = max(hash11(4. * hash11(cid)), .1) * zoom;
    float speed = hash11(height) * 8. + zoom * .5;
    float y_offset = hash11(cid) * 8.;

    vec2 offset = vec2(0., mod(iTime * speed + y_offset * zoom, 4. * zoom) - 2. * zoom);
    m += .01 / sdSegment(cv, vec2(fi, height) + offset, vec2(fi, -height) + offset);
  }

  return m;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = (2. * fragCoord.xy - iResolution.xy) / iResolution.y;

  uv.y *= -1.;

  float m = 0.;
  float p = 1.0;
  float zoom = 1.5;
  int amount_layers = 6;
  for (int i = 1; i < amount_layers; ++i) {
    float fi = float(i);

    m += columns(uv + vec2(hash11(4. * hash11(fi)), 0.), zoom) * p;

    p *= .77;
    zoom *= 3.;
  }

  float grad = smoothstep(-1., 5., uv.y);

  vec3 col = sin(vec3(1., 2., 3.) + uv.y + iTime) * .3 + .6;
  fragColor = vec4(col * (m + grad), 1.);
}`