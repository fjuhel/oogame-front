import {LitElement, css, html} from 'lit';
import { property } from 'lit/decorators.js';

import { UserPlanet } from '../api/generated/UserPlanet';
import { PlanetDto } from '../api/generated/data-contracts';

export class PlanetList extends LitElement {
    @property({type: Array}) public planets: PlanetDto[] = [];

    public static get styles() {
        return css`
        `;
    }

    protected override render() {
        return html`
            <ul>
                ${this.planets.map((planet: any) => html`<li>${planet.name}</li>`)}
            </ul>
        `;
    }

    private async fetchPlanets() {
        const userPlanet = new UserPlanet();
        try {
            const response = await userPlanet.getUserPlanets('east-blue');
            const responseData = await response.json();
            this.planets = responseData;
        } catch (error) {
            console.error('Failed to fetch planets', error);
        }
    }

    protected override firstUpdated() {
        this.fetchPlanets();
    }

}