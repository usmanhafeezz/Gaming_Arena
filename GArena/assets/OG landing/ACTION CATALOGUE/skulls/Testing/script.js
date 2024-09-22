console.log("Script loaded successfully!");
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here

    // JavaScript code to detect system requirements
    var systemInfo = document.getElementById("systemInfo");
    var compatibilityMessage = document.getElementById("compatibilityMessage");

    // Sample system requirements (you can customize this)
    var userSpecifications = {
        RAM: navigator.deviceMemory, // User RAM in GB
        CPU: detectCPU(), // User CPU
        GPU: detectGPU() // User GPU
    };

    var minimumRequirements = {
        RAM: 4, // Minimum RAM in GB
        CPU: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz", // Minimum CPU
        GPU: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)" // Minimum GPU
    };

    var recommendedRequirements = {
        RAM: 8, // Recommended RAM in GB
        CPU: "Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 @ 4GHZ (8 CPUs)", // Recommended CPU
        GPU: "NVIDIA GTX 660 2GB / AMD HD7870 2GB" // Recommended GPU
    };

    // Get user system information
    systemInfo.innerHTML = "<strong>User RAM:</strong> " + userSpecifications.RAM + " GB<br>";
    systemInfo.innerHTML += "<strong>User CPU:</strong> " + (userSpecifications.CPU ? userSpecifications.CPU : "Not Available") + "<br>";
    systemInfo.innerHTML += "<strong>User GPU:</strong> " + (userSpecifications.GPU ? userSpecifications.GPU : "Not Available") + "<br>";

    // Compare system requirements with user's system
    var compatibilityInfo = checkCompatibility();

    if (compatibilityInfo.isCompatible) {
        compatibilityMessage.innerHTML = "Your system meets the minimum requirements to run the game. Enjoy!";
    } else {
        compatibilityMessage.innerHTML = "Sorry, your system does not meet the minimum requirements to run the game.<br>" +
                                          "Your System Specifications:<br>" +
                                          "- RAM: " + userSpecifications.RAM + " GB<br>" +
                                          "- CPU: " + (userSpecifications.CPU ? userSpecifications.CPU : "Not Available") + "<br>" +
                                          "- GPU: " + (userSpecifications.GPU ? userSpecifications.GPU : "Not Available") + "<br>" +
                                          "Minimum Requirements:<br>" +
                                          "- RAM: " + minimumRequirements.RAM + " GB<br>" +
                                          "- CPU: " + minimumRequirements.CPU + "<br>" +
                                          "- GPU: " + minimumRequirements.GPU + "<br>" +
                                          "Recommended Requirements:<br>" +
                                          "- RAM: " + recommendedRequirements.RAM + " GB<br>" +
                                          "- CPU: " + recommendedRequirements.CPU + "<br>" +
                                          "- GPU: " + recommendedRequirements.GPU;
    }

    function checkCompatibility() {
        var compatibility = {
            isCompatible: true
        };

        // Compare user system with minimum requirements
        if (userSpecifications.RAM < minimumRequirements.RAM || 
            (userSpecifications.CPU && userSpecifications.CPU !== minimumRequirements.CPU) ||
            (userSpecifications.GPU && userSpecifications.GPU.toLowerCase().indexOf(minimumRequirements.GPU.toLowerCase()) === -1)) {
            compatibility.isCompatible = false;
        }

        // Compare user system with recommended requirements
        if (userSpecifications.RAM < recommendedRequirements.RAM || 
            (userSpecifications.CPU && userSpecifications.CPU !== recommendedRequirements.CPU) ||
            (userSpecifications.GPU && userSpecifications.GPU.toLowerCase().indexOf(recommendedRequirements.GPU.toLowerCase()) === -1)) {
            compatibility.isCompatible = false;
        }

        return compatibility;
    }

    function detectCPU() {
        var cpu = "Not Available";
        if (navigator.hardwareConcurrency) {
            cpu = "Intel Core i" + Math.ceil(navigator.hardwareConcurrency / 2);
        }
        return cpu;
    }

    function detectGPU() {
        var gpu = "Not Available";
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            var extension = gl.getExtension('WEBGL_debug_renderer_info');
            if (extension) {
                var renderer = gl.getParameter(extension.UNMASKED_RENDERER_WEBGL);
                gpu = renderer;
            }
        }
        return gpu;
    }
});
