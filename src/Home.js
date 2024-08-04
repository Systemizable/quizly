import React, { useEffect } from 'react';
import './Home.css';
import { TimelineLite, TweenLite, Power1, Power4 } from 'gsap';

const Home = () => {
    useEffect(() => {
        // JavaScript code from provided snippet
        class SVG {
            constructor(element, rectWidth = 20, isStriped = false) {
                this.svgStyles = this._getStyles(element);
                this.rectWidth = rectWidth;
                this.isStriped = isStriped;
                this._init(element);
            }

            _init(element) {
                const svg = this._createSVG();
                const text = this._createText();
                const { group, rects } = this._createRects();
                const mask = this._createMask();
                svg.appendChild(text);
                svg.appendChild(group);
                svg.appendChild(mask);
                element.insertAdjacentElement('afterend', svg);
                this._hideElement(element);
                this._initAnimation(text, rects);
            }

            animate(fn) {
                this.animation.eventCallback('onComplete', fn);
                this.animation.play();
            }

            restart(fn) {
                this.animation.eventCallback('onComplete', fn);
                this.animation.restart();
            }

            _getStyles(element) {
                const styles = window.getComputedStyle(element);
                return {
                    text: element.innerText,
                    width: styles.width.match(/\d+/)[0],
                    height: styles.height.match(/\d+/)[0],
                    fontFamily: styles.fontFamily,
                    fontSize: styles.fontSize,
                    fontWeight: styles.fontWeight,
                    textTransform: styles.textTransform,
                    color: styles.color,
                    letterSpacing: styles.letterSpacing,
                };
            }

            _createSVG() {
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttributeNS(null, 'width', this.svgStyles.width);
                svg.setAttributeNS(null, 'height', this.svgStyles.height);
                svg.setAttributeNS(null, 'viewBox', `0 0 ${this.svgStyles.width} ${this.svgStyles.height}`);
                return svg;
            }

            _createText(isMask) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.appendChild(document.createTextNode(this.svgStyles.text));
                text.setAttributeNS(null, 'x', '50%');
                text.setAttributeNS(null, 'y', '50%');
                text.setAttributeNS(null, 'font-family', this.svgStyles.fontFamily);
                text.setAttributeNS(null, 'font-size', this.svgStyles.fontSize);
                text.setAttributeNS(null, 'font-weight', this.svgStyles.fontWeight);
                text.setAttributeNS(null, 'letter-spacing', this.svgStyles.letterSpacing);
                if (isMask) {
                    text.setAttributeNS(null, 'fill', this.svgStyles.color);
                } else {
                    text.setAttributeNS(null, 'fill', 'none');
                    text.setAttributeNS(null, 'stroke-dasharray', '1420');
                    text.setAttributeNS(null, 'stroke-dashoffset', '1420');
                    text.setAttributeNS(null, 'stroke-width', '1');
                    text.setAttributeNS(null, 'stroke', this.svgStyles.color);
                }
                text.setAttributeNS(null, 'text-rendering', 'optimizeLegibility');
                text.setAttributeNS(null, 'dominant-baseline', 'middle');
                text.setAttributeNS(null, 'text-anchor', 'middle');
                return text;
            }

            _createMask() {
                const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
                const text = this._createText(true);
                mask.setAttributeNS(null, 'id', 'mask');
                mask.appendChild(text);
                defs.appendChild(mask);
                return defs;
            }

            _createRects() {
                const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                const numberOfRect = this.svgStyles.width / this.rectWidth + (this.svgStyles.height / this.rectWidth) / 1.5;
                const rects = [];
                const rectHeight = parseInt(this.svgStyles.height) + this.rectWidth * 3;
                const stripe = this.rectWidth / 2;
                for (let i = 0; i < numberOfRect + 1; i++) {
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttributeNS(null, 'x', i * this.rectWidth);
                    rect.setAttributeNS(null, 'y', -20);
                    if (this.isStriped) {
                        rect.setAttributeNS(null, 'width', stripe);
                    } else {
                        rect.setAttributeNS(null, 'width', this.rectWidth);
                    }
                    rect.setAttributeNS(null, 'height', rectHeight);
                    rect.setAttributeNS(null, 'fill', this.svgStyles.color);
                    rects.push(rect);
                    group.appendChild(rect);
                }
                group.setAttributeNS(null, 'mask', 'url(#mask)');
                return { group, rects };
            }

            _hideElement(element) {
                element.style.display = 'none';
            }

            _initAnimation(text, rects) {
                TweenLite.set(rects, { rotation: 45, scaleX: 0 });
                this.animation = new TimelineLite({ paused: true });
                this.animation.to(text, 4, { strokeDashoffset: 0, ease: Power4.easeInOut });
                this.animation.to(rects, 1, { scaleX: 1, ease: Power1.easeIn }, 1.1);
            }
        }

        const tlLines = new TimelineLite();
        tlLines.to('#js-lines', 1, { opacity: 1, ease: Power1.easeOut, delay: 1.6 });

        const svg = new SVG(document.querySelector('[data-svg]'));
        svg.animate(() => {
            window.console.log('done');
        });

        window.restart = () => {
            svg.restart(() => {
                window.console.log('done');
            });
            tlLines.restart();
        };
    }, []);

    return (
        <main className="page" id="js-page">
            <h1 data-svg>new york city</h1>
            <div className="lines">
                <div className="lines__inner" id="js-lines"></div>
            </div>
            <div className="vignette"></div>
            <button className="restart" onClick={() => window.restart()}></button>
        </main>
    );
};

export default Home;
