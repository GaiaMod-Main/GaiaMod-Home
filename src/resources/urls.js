import ProjectApi from "./projectapi"

import { PUBLIC_STUDIO_URL } from "$env/static/public";

export default {
    /**
     * GaiaMod's normal page
     */
    base: `${PUBLIC_STUDIO_URL}/`,

    /**
     * GaiaMod's editor page
     */
    editor: `${PUBLIC_STUDIO_URL}/editor.html`,

    /**
     * GaiaMod's credits page
     */
    credits: `${PUBLIC_STUDIO_URL}/credits.html`,
    
    /**
     * GaiaMod's contact page
     */
    contact: `${PUBLIC_STUDIO_URL}/contact.html`,

    /**
     * GaiaMod's terms of service page
     */
    terms: "/terms",

    /**
     * GaiaMod's privacy policy page
     */
    privacy: "/privacy",

    /**
     * GaiaMod's guideline pages for services
     */
    guidelines: {
        /**
         * GaiaMod's project uploading guidelines
         */
        projects: `${PUBLIC_STUDIO_URL}/GaiaMod-Guidelines/PROJECTS`
    },

    /**
     * Donation pages for sites
     */
    donate: {
        scratch: "https://www.scratchfoundation.org/donate",
        turbowarp: "https://github.com/sponsors/GarboMuffin"
        penguinmod: "https://penguinmod.com/donate"
    },

    /**
     * GaiaMod's project page
     */
    projects: `${ProjectApi.OriginApiUrl}/`,

    /**
     * GaiaMod's my stuff page
     */
    mystuff: `${ProjectApi.OriginApiUrl}/mystuff`,

    /**
     * GaiaMod's home page
     */
    home: "https://gaiamod-main.github.io/GaiaMod-Home/",

    /**
     * GaiaMod's packager page
     */
    packager: `${PUBLIC_STUDIO_URL}/GaiaMod-Packager/`,

    /**
     * GaiaMod's unofficial wiki
     */
    wiki: "https://wiki.penguinmod.com/wiki/Main_Page",

    /**
     * Gaia's Discord invite
     */
    discord: "https://discord.gg/fFnNT8RGav",

    /**
     * Scratch's website
     */
    scratch: "https://scratch.mit.edu",

    /**
     * TurboWarp's website
     */
    turbowarp: "https://turbowarp.org",
	
    /**
     * PenguinMod's website
     */
    penguinmod: "https://penguinmod.com/",

    /**
     * GaiaMod's github page
     */
    github: "https://github.com/GaiaMod-Main/",

    /**
     * GaiaMod's basic API
     */
    basicApi: "https://penguinmod-basic-api.derpygamer2142.com/",

    /**
     * The admin panel for pm projects api
     */
    adminPanel: "https://gaiamod-main.github.io/GaiaMod-Home/panel"
}
